import * as constants from './constants';
import * as actions from './balance';

it('should create an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('should create an action to deposit into the balance', () => {
  const deposit = 10;
  const expectedAction = { type: constants.DEPOSIT, deposit };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('should create an action to withdraw from the balance', () => {
  const withdraw = 10;
  const expectedAction = { type: constants.WIDTHDRAWL, withdraw };

  expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});
