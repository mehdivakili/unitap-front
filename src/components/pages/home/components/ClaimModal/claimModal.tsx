import * as React from 'react';
import { useCallback, useContext, useMemo } from 'react';
import { Text } from 'components/basic/Text/text.style';
import { ClaimModalWrapper, WalletAddress } from 'components/pages/home/components/ClaimModal/claimModal.style';
import Icon from 'components/basic/Icon/Icon';
import { PrimaryButton } from 'components/basic/Button/button';
import { Input } from 'components/basic/Input/input';
import { BrightIdVerificationStatus, Chain } from '../../../../../types';
import { ethers } from 'ethers';
import { shortenAddress } from '../../../../../utils';
import useActiveWeb3React from '../../../../../hooks/useActiveWeb3React';
import { claimMax } from '../../../../../api';
import { UserProfileContext } from '../../../../../hooks/useUserProfile';

const ClaimModal = ({ chain, closeModalHandler }: { chain: Chain; closeModalHandler: () => void }) => {
  const formatBalance = useCallback((amount: number) => {
    const fw = ethers.utils.formatEther(amount);
    return Number(fw) < 0.000001 ? '< 0.000001' : fw;
  }, []);
  const { active, account } = useActiveWeb3React();
  const userProfile = useContext(UserProfileContext);
  const brightIdVerified = useMemo(
    () => userProfile!.verificationStatus === BrightIdVerificationStatus.VERIFIED,
    [userProfile],
  );
  const claim = useCallback(async () => {
    if (!brightIdVerified) {
      return;
    }
    try {
      await claimMax(account!, chain.pk);
      alert('Claimed successfully!');
      closeModalHandler();
    } catch (ex) {
      alert('Error while claiming');
      console.log(ex);
    }
  }, [account, brightIdVerified, chain.pk, closeModalHandler]);

  return (
    <ClaimModalWrapper data-testid={`chain-claim-modal-${chain.pk}`}>
      <Text data-testid={`loading`}>Loading...</Text>
      <Text fontSize="14" className="scan-qr-text">
        Claim {formatBalance(chain.maxClaimAmount)} {chain.symbol}
      </Text>
      <Icon iconSrc={chain.logoUrl} width="42%" height="auto" />
      <WalletAddress fontSize="12">Wallet Address</WalletAddress>
      <Input disabled width="100%" value={active ? shortenAddress(account) : ''}></Input>
      <PrimaryButton onClick={claim} width="100%" data-testid={`chain-claim-action-${chain.pk}`}>
        {brightIdVerified ? 'Claim' : 'BrightID not connected'}
      </PrimaryButton>
    </ClaimModalWrapper>
  );
};

export default ClaimModal;
