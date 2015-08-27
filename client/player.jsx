/* global React */

Player = React.createClass({
  propTypes: {
    player: React.PropTypes.object.isRequired,
    selected: React.PropTypes.bool.isRequired,
    selectPlayer: React.PropTypes.func.isRequired
  },

  clickHandler() {
    this.props.selectPlayer(this.props.player._id);
  },

  render() {
    const cx = classNames('player', {selected: this.props.selected});
    return (
      <li className={cx} onClick={this.clickHandler}>
        <span className='name'>{this.props.player.name}</span>
        <span className='score'>{this.props.player.score}</span>
      </li>
    );
  }
});
