PlayersCollection = new Mongo.Collection("players");

Application = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var player = PlayersCollection.findOne(Session.get("selectedPlayer"));
    return {
      players: PlayersCollection.find({}, { sort: { score: -1, name: 1 } }).fetch(),
      selectedPlayer: {
        id: player && player._id,
        name: player && player.name
      }
    };
  },

  selectPlayer(id) {
    Session.set("selectedPlayer", id);
  },

  incrementScore() {
    PlayersCollection.update(Session.get("selectedPlayer"), {$inc: {score: 5}});
  },

  render() {
    return (
      <Leaderboard
        players={this.data.players}
        selectedPlayer={this.data.selectedPlayer}
        selectPlayer={this.selectPlayer}
        incrementScore={this.incrementScore}
      />
    );
  }
});

Meteor.startup(function () {
  React.render(<Application />, document.getElementById("application"));
});