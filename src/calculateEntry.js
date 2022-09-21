const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((crianca) => crianca.age < 18).length;
  const adult = entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length;
  const senior = entrants.filter((idoso) => idoso.age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.keys === undefined) {
    return 0;
  }
  const results = countEntrants(entrants);
  return results.child * 20.99 + results.adult * 49.99 + results.senior * 24.99;
};

module.exports = { calculateEntry, countEntrants };
