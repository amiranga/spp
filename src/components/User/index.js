import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this._displayVoted = this._displayVoted.bind(this);
  }

  _displayVoted() {
    const vote = this.props.vote;
    if (this.props.revealVotes) {
      return vote || '-';
    } else {
      return vote ? '\u2714' : '-';
    }
  }

  render() {
    return (
      <Row className="user-data">
        <Col sm={8}>
          <div className="user-name">{this.props.name}</div>
        </Col>
        <Col sm={4}>
          <div className="action">{this._displayVoted()}</div>
        </Col>
      </Row>
    );
  }
}

export default User;