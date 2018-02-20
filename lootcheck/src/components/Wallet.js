import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Row, Col, Button, Icon } from 'react-materialize';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <Row>
          <Input s={4} label="Amount" />
          <Button
            waves="light"
            className="btn-deposit"
            onClick={this.props.deposit}
          >
            Deposit
          </Button>
          <Button
            waves="light"
            className="btn-withdraw"
            onClick={this.props.withdraw}
            style={{ margin: '0 10px' }}
          >
            Withdraw
          </Button>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { balance: state };
};

export default connect(mapStateToProps, null)(Wallet);
