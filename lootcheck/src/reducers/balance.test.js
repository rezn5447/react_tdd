import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
    ).toEqual(balance);
  });

  it('should deposit into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(
      balanceReducer(initialState, {
        type: constants.DEPOSIT,
        deposit
      })
    ).toEqual(initialState + deposit);
  });

  it('should withdraw from the balance', () => {
    const withdraw = 10;
    const initialState = 50;

    expect(
      balanceReducer(initialState, {
        type: constants.WITHDRAW,
        withdraw
      })
    ).toEqual(initialState - withdraw);
  });
});
