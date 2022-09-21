const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const collaborators = employees.find((employ) => employ.id === id);
  const animals = species.find((element) => element.id === collaborators.responsibleFor[0]);
  const position = animals.residents.sort((element, parameter) => parameter.age - element.age);
  return ([position[0].name, position[0].sex, position[0].age]);
};

module.exports = getOldestFromFirstSpecies;
