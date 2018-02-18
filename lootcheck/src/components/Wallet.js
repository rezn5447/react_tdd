import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon } from 'react-materialize';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { balance: state };
};

export default connect(mapStateToProps, null)(Wallet);
