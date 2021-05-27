  
const Engineer = require('../lib/engineer');

test("Test Github", () => {
    const testValue = "mamabasnow";
    const employee = new Engineer("Joe", 1, "test@test.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "engineer";
    const employee = new engineer("Joe", 1, "test@test.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get gitHub", () => {
    const testValue = "mambasnow";
    const employee = new Engineer("Joe", 1, "test@test.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);});