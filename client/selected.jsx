Selected = React.createClass({
  render() {
    if(this.props.selectedPlayer.name) {
      return (
        <div className='details'>
          <div className='name'>{this.props.selectedPlayer.name}</div>
          <Button
            className='inc'
            onClick={this.props.incrementScore}
            text='Add 5 points'
          />
        </div>
      );
    } else {
      return (
        <div className='message'>Click a player to select</div>
      );
    }
  }
});
