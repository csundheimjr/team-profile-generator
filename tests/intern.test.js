const Intern = require("../lib/Intern");

//test for initilization
describe("Intern Class", () => {
  it("When I initilize the class, a new Intern object is initialized.", () => {
    const testID = "2";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testSchool = "Hardknocks";

    const testEmployee = new Intern(testName, testID, testEmail, testSchool);

    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.email).toEqual(testEmail);
    expect(testEmployee.school).toEqual(testSchool);
  });
});

describe("getSchool", () => {
  it("When the getEmail method is called, it returns the new employee's email address.", () => {
    const testID = "2";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testSchool = "Hardknocks";

    const testEmployee = new Intern(testName, testID, testEmail, testSchool);

    expect(testEmployee.getSchool()).toEqual(testSchool);
  });
});

describe("getRole", () => {
  it("When the getRole method is called, it returns the role of Intern.", () => {
    const testID = "2";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testSchool = "Hardknocks";
    const testEmployee = new Intern(testName, testID, testEmail, testSchool);

    expect(testEmployee.getRole()).toEqual("Intern");
  });
});
