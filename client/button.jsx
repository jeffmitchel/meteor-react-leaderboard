/* global React, Radium, */

const styles = {
  base: {
    borderRadius: '3em',
    border: '#eb5f3a 1px solid',
    background: 'transparent',
    color: '#eb5f3a',
    cursor: 'pointer',
    float: 'right',
    fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '1rem',
    lineHeight: '1',
    margin: '0',
    outline: 'none',
    padding: '10px 30px',
    transition: 'all 200ms ease-in',
    ':hover': {
      background: '#eb5f3a',
      color: '#fff'
    },
    ':active': {
      boxShadow: 'rgba(0,0,0,.3) 0 1px 3px 0 inset'
    }
  }
};

Button = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      className: ''
    };
  },

  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        style={styles.base}>{this.props.text}
      </button>
    );
  }
});

Button = Radium(Button);
