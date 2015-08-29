let {SELECT_PLAYER, INCREMENT_SCORE} = Actions;

function selectedPlayer(state = { id: false, name: false }, action) {
  switch (action.type) {
  case SELECT_PLAYER:
    let player = PlayersCollection.findOne(action.id);
    return {
      id: player && player._id,
      name: player && player.name
    };
  case INCREMENT_SCORE:
    let id = state.id;
    if (id) {
      PlayersCollection.update(id, {$inc: {score: action.value}});
    }
    return state;
  default:
    return state;
  }
}

function players(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}

LeaderboardApp = Redux.combineReducers({ selectedPlayer, players });
