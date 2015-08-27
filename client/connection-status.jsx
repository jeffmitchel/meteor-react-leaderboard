/* global React, Radium, */

const styles = {
  disconnected: {
    background: '#f00',
    color: '#fee',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    padding: '10px 0',
    textAlign: 'center',
    transition: 'all 200ms ease-in',
    ':hover': {
      color: '#fff'
    }
  }, connected: {
    marginBottom: '10px'
  }
};

ConnectionStatus = React.createClass({
  propTypes: {
    connection: React.PropTypes.object,
    onClick: React.PropTypes.func
  },

  render() {
    return (
      <div onClick={this.props.onClick}
        style={this.props.connection.connected ?
            styles.connected : styles.disconnected} >
        {this.props.connection.connected ?
          '' : 'Not connected to the server.'}
      </div>
    );
  }
});

ConnectionStatus = Radium(ConnectionStatus);
