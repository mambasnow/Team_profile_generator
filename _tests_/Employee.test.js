  
  
const Employee = require('../lib/Employee');

test('Should create an object for employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set Employee Name', () => {
    const name = "Joe"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
    // expect(employee.id).toBe(name);
});
test('Set ID', () => {
    const testId = 10;
    const employee = new Employee("Joe", testId);
    expect(employee.id).toBe(testId);
});
test('Set Email', () => {
    const testEmail = "test@test.com"
    const employee = new Employee("Joe", 10, testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name from getName', () => {
    const testName = "Joe"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "12"
    const employee = new Employee("Joe", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "Test2@test.com"
    const employee = new Employee("Joe", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Joe", 1, "test@test.com");
    expect(employee.getRole()).toBe(testRole);
});