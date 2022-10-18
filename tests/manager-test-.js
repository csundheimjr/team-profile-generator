const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  it("When I initilize the class, a new Manager object is initialized.", () => {
    const testID = "6";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testOffice = "111";

    const testEmployee = new Manager(testName, testID, testEmail, testOffice);

    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.email).toEqual(testEmail);
    expect(testEmployee.officeNumber).toEqual(testOffice);
  });
});

describe("getOfficeNumber", () => {
  it("When the getOffice method is called, it returns the managers office number.", () => {
    const testID = "6";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testOffice = "111";

    const testEmployee = new Manager(testName, testID, testEmail, testOffice);

    expect(testEmployee.getOfficeNumber()).toEqual(testOffice);
  });
});

describe("getRole", () => {
  it("When the getRole method is called, it returns the role of Manager.", () => {
    const testID = "6";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testOffice = "111";

    const testEmployee = new Manager(testName, testID, testEmail, testOffice);

    expect(testEmployee.getRole()).toEqual("Manager");
  });
});
