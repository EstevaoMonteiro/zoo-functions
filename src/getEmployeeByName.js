const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const results = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return results;
};

module.exports = getEmployeeByName;
