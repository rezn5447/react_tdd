import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should contain a connected Wallet component', () => {
    console.log(app.debug());
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
});
