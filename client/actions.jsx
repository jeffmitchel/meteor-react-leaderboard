Actions = {
  SELECT_PLAYER: 'SELECT_PLAYER',
  INCREMENT_SCORE: 'INCREMENT_SCORE'
};

ActionCreators = {
  selectPlayer(id) {
    return { type: Actions.SELECT_PLAYER, id: id };
  },
  incrementScore() {
    return { type: Actions.INCREMENT_SCORE, value: 5 };
  }
};
