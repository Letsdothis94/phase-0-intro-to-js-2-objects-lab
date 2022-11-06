// Write your solution in this file!
const employee = {
    name: "cristian",
    streetAddress: "11 street",
}

function updateEmployeeWithKeyAndValue() {
    const newKey = { ...employee };
    newKey.streetAddress = "11 Broadway";
    return newKey;
}
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey() {
    const deleteKey = { ...employee };
    delete deleteKey.streetAddress;
    delete deleteKey.name;
    return deleteKey;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}