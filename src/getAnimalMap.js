const { species } = require('../data/zoo_data');

const getAnimalMap = (options) => {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || !options.includeNames) {
    species.forEach((especie) => locations[especie.location].push(especie.name));
    return locations;
  }
  species
    .forEach((especie) => locations[especie.location]
      .push({
        [especie.name]: especie.residents
          .filter((resident) => (!options.sex || (resident.sex === options.sex)))
          .sort(options.sorted ? (element, parameter) => element.name
            .localeCompare(parameter.name) : () => 0).map((resident) => resident.name),
      }));
  return locations;
};

module.exports = getAnimalMap;
