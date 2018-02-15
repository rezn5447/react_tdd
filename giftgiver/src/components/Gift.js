import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';

class Gift extends Component {
  constructor() {
    super();
    this.state = { person: '', present: '' };
  }
  render() {
    return (
      <Row>
        <Input
          s={12}
          className="input-person"
          type="name"
          label="person"
          onChange={event => this.setState({ person: event.target.value })}
        >
          <Icon>account_circle</Icon>
        </Input>
        <Input
          s={12}
          className="input-present"
          type="name"
          label="person"
          onChange={event => this.setState({ present: event.target.value })}
        >
          <Icon>card_giftcard</Icon>
        </Input>
      </Row>
    );
  }
}

export default Gift;
