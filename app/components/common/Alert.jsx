import React, { Component } from 'react';

export default class Alert extends Component {
  render() {
    const alert = this.props.alert;
    return (
      <div
        class={`alert alert-${alert.context}`}
        role="alert"
        style={{ position: 'absolute', left: alert.x, top: alert.y }}
      >
        {alert.message}
      </div>
    );
  }
}
