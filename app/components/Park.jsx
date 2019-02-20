import React, { Component } from 'react';
import Alert from './common/Alert.jsx';
import Scientists from './Scientists.jsx';
import { Queue } from '../helpers/Queue';
import { Message } from '../helpers/Message';

export default class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerting: true,
      alert: {
        x: 250,
        y: 250,
        context: 'info',
        message: 'Park closes early today',
        context: 'info'
      },
      warning: {
        x: 200,
        y: 200,
        context: 'warning',
        message: 'Park closes early today',
        context: 'info'
      },
      scientists: [],
      msgQueue: new Queue()
    };
  }

  addMessageToQueue(msg, context) {
    const message = new Message(msg, context);
    let newQueue = Object.assign({}, this.state.msgQueue);
    newQueue.add(message);
    this.setState({ msgQueue: newQueue });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.alerting) {
      setState({
        alerting: false
      });
    }
  }

  componentDidMount() {
    // addMessageToQueue('You need to get out now!', 'danger');
    // this.timerID = setInterval(() => this.tick(), 4000);

    fetch('./app/data/workers.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(parsedResponse => {
        if (parsedResponse && parsedResponse.length) {
          this.setState({ scientists: parsedResponse });
        }
      })
      .catch(error => console.warn(error));
  }
  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">Park</h2>
        <Scientists data={this.state.scientists} />
        <div>{this.props.render(this.state.alert)}</div>
      </div>
    );
  }
}
