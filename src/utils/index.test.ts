import { diffToNextMonday } from './index';

describe('utils', () => {
  test('diffToNextMonday sunday 22:42:05', () => {
    const sundayNight = new Date(1653847925012);
    expect(diffToNextMonday(sundayNight)).toEqual({
      days: '00',
      hours: '01',
      minutes: '17',
      seconds: '55',
    });
  });
  test('diffToNextMonday monday 04:32:07', () => {
    const mondayMorning = new Date(1653868927795);
    expect(diffToNextMonday(mondayMorning)).toEqual({
      days: '06',
      hours: '19',
      minutes: '27',
      seconds: '53',
    });
  });
  test('diffToNextMonday wednesday 00:00:00', () => {
    const wednesdayMidnight = new Date(1654025400000);
    expect(diffToNextMonday(wednesdayMidnight)).toEqual({
      days: '05',
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  });
});
