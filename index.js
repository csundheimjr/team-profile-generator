// require npm packages
//TODO require files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/renderHTML");
const { resolve } = require("path");
const { report } = require("process");
//write functions
// promts
function managerPrompts() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add an engineer or intern?",
      choices: ["Engineer", "Intern", "None"],
    },
  ]);
}

function engineerPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub name?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add another engineer or intern?",
      choices: ["Engineer", "Intern", "None"],
    },
  ]);
}

function internPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school did the intern come from?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add another engineer or intern?",
      choices: ["Engineer", "Intern", "None"],
    },
  ]);
}
function employeePrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school did the employee come from?",
    },
    {
      type: "list",
      name: "addEmployee",
      message: "Would you like to add another engineer or intern?",
      choices: ["Engineer", "Intern", "None"],
    },
  ]);
}

// make functions
const allEmployee = [];

function makeEngineer() {
  engineerPrompt().then(function (response) {
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      response.github
    );
    if (response.addEmployee == "Engineer") {
      allEmployee.push(engineer);
      makeEngineer();
    } else if (response.addEmployee == "Intern") {
      allEmployee.push(engineer);
      makeIntern();
    } else if (response.addEmployee == "None") {
      allEmployee.push(engineer);

      fs.writeFile("./output/team.html", render(allEmployee), function (err) {
        if (err) throw err;
        console.log("Writing file @makeEngineer function.");
      });

      return;
    }
  });
}

function makeIntern() {
  internPrompt().then(function (response) {
    const intern = new Intern(
      response.name,
      response.id,
      response.email,
      response.school
    );
    if (response.addEmployee == "Engineer") {
      allEmployee.push(intern);
      makeEngineer();
    } else if (response.addEmployee == "Intern") {
      allEmployee.push(intern);
      makeIntern();
    } else if (response.addEmployee == "None") {
      allEmployee.push(intern);

      fs.writeFile("./output/team.html", render(allEmployee), function (err) {
        if (err) throw err;
        console.log("Writing file @makeIntern function.");
      });

      return;
    }
  });
}

function makeManager() {
  managerPrompts().then(function (response) {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );

    if (response.addEmployee == "Engineer") {
      allEmployee.push(manager);
      makeEngineer();
    } else if (response.addEmployee == "Intern") {
      allEmployee.push(manager);
      makeIntern();
    } else if (response.addEmployee == "None") {
      allEmployee.push(manager);

      fs.writeFile("./output/team.html", render(allEmployee), function (err) {
        if (err) throw err;
        console.log("Writing file @makeManager function.");
      });

      return;
    }
  });
}

console.log("Building team.");
makeManager();
