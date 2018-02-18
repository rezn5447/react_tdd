import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';

class Gift extends Component {
  constructor() {
    super();
    this.state = { person: '', present: '' };
  }
  render() {
    return (
      <Row>
        <Input
          s={6}
          className="input-person"
          type="text"
          label="person"
          onChange={event => this.setState({ person: event.target.value })}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          s={6}
          className="input-present"
          type="text"
          label="present"
          onChange={event => this.setState({ present: event.target.value })}
        >
          <Icon>card_giftcard</Icon>
        </Input>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift {this.props.gift.id}
        </Button>
      </Row>
    );
  }
}

export default Gift;
