/* global React, Player */

Players = React.createClass({
  propTypes: {
    players: React.PropTypes.array,
    selectPlayer: React.PropTypes.func,
    selectedPlayer: React.PropTypes.object
  },

  render() {
    return (
      <ol className='players'>
        {
          this.props.players.map((player) => {
            return (
              <Player
                key={player._id}
                player={player}
                selected={player._id === this.props.selectedPlayer.id}
                selectPlayer={this.props.selectPlayer}
              />
            );
          })
        }
      </ol>
    );
  }
});
