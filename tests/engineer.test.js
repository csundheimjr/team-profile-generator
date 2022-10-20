const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  it("When I initilize the class, a new Engineer object is initialized.", () => {
    const testID = "3";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testGit = "git_Carl";

    const testEmployee = new Engineer(testName, testID, testEmail, testGit);

    expect(testEmployee.id).toEqual(testID);
    expect(testEmployee.name).toEqual(testName);
    expect(testEmployee.email).toEqual(testEmail);
    expect(testEmployee.github).toEqual(testGit);
  });
});

describe("getGithub", () => {
  it("When call the getGithub method it returns the Engineer's github username.", () => {
    const testID = "3";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testGit = "git_Carl";

    const testEmployee = new Engineer(testName, testID, testEmail, testGit);

    expect(testEmployee.getGithub()).toEqual(testGit);
  });
});

describe("getRole", () => {
  it("When call the getRole method it returns the role of Engineer.", () => {
    const testID = "3";
    const testName = "Carl";
    const testEmail = "Carl@email.com";
    const testGit = "git_Carl";

    const testEmployee = new Engineer(testName, testID, testEmail, testGit);

    expect(testEmployee.getRole()).toEqual("Engineer");
  });
});
