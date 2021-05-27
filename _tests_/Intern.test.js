  
const Intern = require("../lib/intern");

test("Checking School", () => {
    const testValue = "UCI";
    const employee = new Intern("Joe", 1, "test@test.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "intern";
    const employee = new Intern("Joe", 1, "test@test.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get School", () => {
    const testValue = "UCI";
    const employee = new Intern("Joe", 1, "test@test.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});