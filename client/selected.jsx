/* global React, Button */

Selected = React.createClass({
  propTypes: {
    incrementScore: React.PropTypes.func.isRequired,
    selectedPlayer: React.PropTypes.object.isRequired
  },

  render() {
    return this.props.selectedPlayer.name ? (
      <div className='details'>
        <div className='name'>{this.props.selectedPlayer.name}</div>
        <Button
          className='inc'
          onClick={this.props.incrementScore}
          text='Add 5 points'
        />
      </div>
    ) : (
      <div className='message'>Click a player to select</div>
    );
  }
});
