const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((parameter, element) => {
      const obj = {};
      obj[element.name] = element.residents.length;
      return Object.assign(parameter, obj);
    }, {});
  }
  const { specie, sex } = animal;
  const [value] = species.filter((element) => element.name === specie);
  if (sex) {
    return value.residents.filter((element) => element.sex === sex).length;
  }
  return value.residents.length;
};

module.exports = countAnimals;
