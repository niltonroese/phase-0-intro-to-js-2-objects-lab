// Write your solution in this file!
let employee = {
    Name: 'Nilton', 
    streetAddress: '94 Amarina Ave'
}

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmployee = {...employee};
    newEmployee[name] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const clonedEmployee = {...employee};
    delete clonedEmployee.name;
    return clonedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}