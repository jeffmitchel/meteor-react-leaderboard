Players = React.createClass({
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
            )
          })
        }
      </ol>
    );
  }
});
