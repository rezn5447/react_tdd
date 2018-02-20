import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it('should render correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('should display the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
  });

  it('should have an input to deposit or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  it('should have a button for withdraw', () => {
    expect(wallet.find('.btn-withdraw').exists()).toBe(true);
  });

  it('should have a button for deposit', () => {
    expect(wallet.find('.btn-deposit').exists()).toBe(true);
  });

  describe('when the user types into the wallet Input', () => {
    const userBalance = '25';
    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    it('should update the local wallet balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });
  });
});
