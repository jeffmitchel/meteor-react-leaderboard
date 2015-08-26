# Meteor React Leaderboard

A React version of the Leaderboard example app that I'm using for experiments.

## Notes

### React

Converted all Blaze templates to React individual React components, one per file. All state is managed by the Application component (client/app.jsx) and is passed down using props.

### Radium

Radium is used for styling the 'add points' button. See client/button.jsx.

### ClassNames

ClassNames is used for conditional classes on the player component. See client/player.jsx.
