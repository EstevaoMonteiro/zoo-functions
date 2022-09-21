const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeesCoverageOther = (object) => {
  const employe = employees.find((parameter) =>
    (parameter.firstName === object.name)
    || (parameter.lastName === object.name)
    || (parameter.id === object.id));
  if (!employe) {
    throw new Error('Informações inválidas');
  }
  const especies = data.species.filter((element) => employe.responsibleFor.includes(element.id));
  return {
    id: employe.id,
    fullName: `${employe.firstName} ${employe.lastName}`,
    species: especies.map((element) => element.name),
    locations: especies.map((element) => element.location),
  };
};

const getEmployeesCoverage = (parameter) => {
  if (!parameter) {
    return employees.map((value) => {
      const especies = data.species.filter((specie) => value.responsibleFor.includes(specie.id));
      return {
        id: value.id,
        fullName: `${value.firstName} ${value.lastName}`,
        species: especies.map((specie) => specie.name),
        locations: especies.map((specie) => specie.location),
      };
    });
  }
  return getEmployeesCoverageOther(parameter);
};

module.exports = getEmployeesCoverage;
