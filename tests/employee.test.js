const Employee = require("../lib/employee");

//test for initilization
describe("Employee Class", () => {
  it("When I initilize the class, a new Employee object is initialized.", () => {
    const testID = "8";
    const testName = "Carl";
    const testEmail = "Carl@email.com";

    const testEmployee = new Employee(testName, testID, testEmail);

    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.email).toEqual(testEmail);
  });
});

describe("getName", () => {
  it("When the getName method is called, it returns the new employee's name.", () => {
    const testID = "8";
    const testName = "Carl";
    const testEmail = "Carl@email.com";

    const testEmployee = new Employee(testName, testID, testEmail);

    expect(testEmployee.getName()).toEqual(testName);
  });
});

describe("getId", () => {
  it("When the getId method is called, it returns the new employee's ID.", () => {
    const testID = "8";
    const testName = "Carl";
    const testEmail = "Carl@email.com";

    const testEmployee = new Employee(testName, testID, testEmail);

    expect(testEmployee.getId()).toEqual(testID);
  });
});

describe("getEmail", () => {
  it("When the getEmail method is called, it returns the new employee's email address.", () => {
    const testID = "8";
    const testName = "Carl";
    const testEmail = "Carl@email.com";

    const testEmployee = new Employee(testName, testID, testEmail);

    expect(testEmployee.getEmail()).toEqual(testEmail);
  });
});

describe("getRole", () => {
  it("When the getRole method is called, it returns the role of Employee.", () => {
    const testID = "8";
    const testName = "Carl";
    const testEmail = "Carl@email.com";

    const testEmployee = new Employee(testName, testID, testEmail);

    expect(testEmployee.getRole()).toEqual("Employee");
  });
});
