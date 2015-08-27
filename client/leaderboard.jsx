/* global React, Players, Selected */

Leaderboard = React.createClass({
  propTypes: {
    players: React.PropTypes.array,
    incrementScore: React.PropTypes.func,
    selectPlayer: React.PropTypes.func,
    selectedPlayer: React.PropTypes.object
  },

  render() {
    return (
      <div className='outer'>
        <div className='logo'></div>
        <h1 className='title'>Leaderboard</h1>
        <div className='subtitle'>Select a scientist to give them points</div>
        <Players
          players={this.props.players}
          selectedPlayer={this.props.selectedPlayer}
          selectPlayer={this.props.selectPlayer}
        />
        <Selected
          selectedPlayer={this.props.selectedPlayer}
          incrementScore={this.props.incrementScore}
        />
      </div>
    );
  }
});
