Button = React.createClass({
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}>{this.props.text}
      </button>
    );
  }
});
