/* global Meteor, React, ReactRedux, Leaderboard, ConnectionStatus */

PlayersCollection = new Mongo.Collection('players');

let Application = React.createClass({
  propTypes: {
    selectedPlayer: React.PropTypes.object.isRequired,
    selectPlayer: React.PropTypes.func.isRequired,
    incrementScore: React.PropTypes.func.isRequired
  },
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      players: PlayersCollection
        .find({}, { sort: { score: -1, name: 1 } })
        .fetch()
    };
  },

  render() {
    return (
      <div>
        <ConnectionStatus />
        <Leaderboard
          players={this.data.players}
          selectedPlayer={this.props.selectedPlayer}
          selectPlayer={this.props.selectPlayer}
          incrementScore={this.props.incrementScore}
        />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    selectedPlayer: state.selectedPlayer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPlayer: id => dispatch(ActionCreators.selectPlayer(id)),
    incrementScore: () => dispatch(ActionCreators.incrementScore(5))
  };
}

Meteor.startup(() => {
  let store = Redux.createStore(LeaderboardApp);
  let App = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps)(Application);
  React.render(
    <ReactRedux.Provider store={store}>
      {() => <App />}
    </ReactRedux.Provider>,
    document.getElementById('application')
  );
});
