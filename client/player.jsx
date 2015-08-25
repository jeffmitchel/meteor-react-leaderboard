Player = React.createClass({
  clickHandler() {
    this.props.selectPlayer(this.props.player._id);
  },

  render() {
    const cn = 'player' + (this.props.selected ? ' selected' : '');
    return (
      <li className={cn} onClick={this.clickHandler}>
        <span className='name'>{this.props.player.name}</span>
        <span className='score'>{this.props.player.score}</span>
      </li>
    );
  }
});
