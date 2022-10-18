// require npm packages
const inquirer = require("inquirer");
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
