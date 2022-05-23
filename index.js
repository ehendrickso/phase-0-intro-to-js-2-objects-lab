const employee = {
    name:"Sam", 
    streetAddress: "15 Blanchard Street",
};

employee.City = "Seattle"

function updateEmployeeWithKeyAndValue(employee, key, value) {
   let employee2 = {...employee, [key]: value}
    return employee2
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}