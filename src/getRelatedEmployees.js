const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((element) => (element.managers.includes(id)));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } if (isManager(managerId) === true) {
    const array = [];

    employees.forEach((employee) => {
      if (employee.managers.includes(managerId) === true) {
        array.push(`${employee.firstName} ${employee.lastName}`);
      }
    });

    return array;
  }
};

module.exports = { isManager, getRelatedEmployees };
