/* global React, Radium, */

const styles = {
  disconnected: {
    background: '#f00',
    color: '#fee',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    padding: '10px 0',
    textAlign: 'center',
    transition: 'all 100ms ease-in',
    ':hover': {
      color: '#fff'
    }
  }, connected: {
    marginBottom: '10px'
  }
};

ConnectionStatus = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      connection: Meteor.status()
    };
  },

  render() {
    return (
      <div onClick={Meteor.reconnect}
        style={this.data.connection.connected ?
            styles.connected : styles.disconnected} >
        {this.data.connection.connected ?
          '' : 'Not connected to the server.'}
      </div>
    );
  }
});

ConnectionStatus = Radium(ConnectionStatus);
