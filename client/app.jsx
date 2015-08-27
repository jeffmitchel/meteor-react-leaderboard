/* global Meteor, React, Leaderboard, ConnectionStatus */

PlayersCollection = new Mongo.Collection('players');

let Application = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let player = PlayersCollection.findOne(Session.get('selectedPlayer'));
    return {
      players: PlayersCollection
        .find({}, { sort: { score: -1, name: 1 } })
        .fetch(),
      selectedPlayer: {
        id: player && player._id,
        name: player && player.name
      },
      connection: Meteor.status()
    };
  },

  selectPlayer(id) {
    Session.set('selectedPlayer', id);
  },

  incrementScore() {
    PlayersCollection.update(Session.get('selectedPlayer'), {$inc: {score: 5}});
  },

  render() {
    return (
      <div>
        <ConnectionStatus
          connection={this.data.connection}
          onClick={Meteor.reconnect}
        />
        <Leaderboard
          players={this.data.players}
          selectedPlayer={this.data.selectedPlayer}
          selectPlayer={this.selectPlayer}
          incrementScore={this.incrementScore}
        />
      </div>
    );
  }
});

Meteor.startup(() => {
  React.render(<Application />, document.getElementById('application'));
});
