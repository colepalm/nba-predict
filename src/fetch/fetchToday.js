const nba = require('nba');

function fetchToday() {
  const curry = nba.findPlayer('Stephen Curry');
  console.log(curry);
}

module.exports = {
  fetchToday
};

