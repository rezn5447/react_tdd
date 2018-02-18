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

  it('should have an input to deposit or withdraw from the balance', () => {});
});
