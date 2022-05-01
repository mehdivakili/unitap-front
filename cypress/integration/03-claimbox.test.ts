import { CustomizedBridge, provider, signer } from '../support/commands';
import {
  chainList,
  chainListAuthenticatedClaimedFirst,
  TEST_ADDRESS_NEVER_USE,
  userProfileNotVerified,
  userProfileVerified,
} from '../utils/data';

describe('Claim', () => {
  beforeEach(() => {
    cy.server({ force404: true });
    setupEthBridge();
    setupGetChainListAuthenticated();
  });

  const setupGetChainListServerGeneral = () => {
    cy.route({
      method: 'GET',
      url: `/api/v1/chain/list/`,
      response: chainList,
    });
  };
  const setupGetChainListServerNotAuthenticated = () => {
    setupGetChainListServerGeneral();
    cy.route({
      method: 'GET',
      url: `/api/v1/chain/list/${TEST_ADDRESS_NEVER_USE}`,
      response: chainList,
    });
  };

  const setupGetChainListAuthenticated = () => {
    setupGetChainListServerGeneral();
    cy.route({
      method: 'GET',
      url: `/api/v1/chain/list/${TEST_ADDRESS_NEVER_USE}`,
      response: chainListAuthenticatedClaimedFirst,
    });
  };

  const setupGetUserProfileNotVerified = () => {
    cy.route({
      method: 'GET',
      url: `/api/v1/user/${TEST_ADDRESS_NEVER_USE}/`,
      response: userProfileNotVerified,
    });
  };

  const setupGetUserProfileVerified = () => {
    cy.route({
      method: 'GET',
      url: `/api/v1/user/${TEST_ADDRESS_NEVER_USE}/`,
      response: userProfileVerified,
    });
  };

  const setupClaimMax = () => {
    cy.route({
      method: 'POST',
      url: `/api/v1/chain/${chainList[1].pk}/claim-max/${TEST_ADDRESS_NEVER_USE}`,
      response: {},
      delay: 2000,
    }).as('claimMax');
  };

  // @ts-ignore
  const setupEthBridge = () => {
    cy.on('window:before:load', (win) => {
      // @ts-ignore
      win.ethereum = new CustomizedBridge(signer, provider);
    });
  };

  it('does not show modal when claimed', () => {
    setupGetUserProfileVerified();
    cy.visit('/');
    cy.wait(1000);

    cy.get(`[data-testid=chain-show-claim-${chainList[0].pk}]`).click();
    cy.get(`[data-testid=chain-claim-modal-${chainList[0].pk}]`).should('not.exist');
  });

  it('cannot claim with unverified BrightID', () => {
    setupGetUserProfileNotVerified();
    setupClaimMax();
    cy.visit('/');
    cy.wait(1000);

    cy.get(`[data-testid=chain-show-claim-${chainList[1].pk}]`).click();
    cy.get(`[data-testid=chain-claim-modal-${chainList[1].pk}]`).should('exist');
    cy.get(`[data-testid=chain-claim-action-${chainList[1].pk}]`).click();
    // @ts-ignore
    cy.shouldBeCalled('claimMax', 0);
  });

  it('do claim', () => {
    setupGetUserProfileVerified();
    setupClaimMax();
    cy.visit('/');
    cy.wait(1000);

    cy.get(`[data-testid=chain-show-claim-${chainList[1].pk}]`).click();
    cy.get(`[data-testid=loading`).should('not.exist');
    cy.get(`[data-testid=chain-claim-modal-${chainList[1].pk}]`).should('exist');
    cy.get(`[data-testid=chain-claim-action-${chainList[1].pk}]`).click();
    cy.get(`[data-testid=loading`).should('exist');
    cy.wait('@claimMax');
    cy.get(`[data-testid=chain-claim-modal-${chainList[1].pk}]`).should('not.exist');
  });
});
