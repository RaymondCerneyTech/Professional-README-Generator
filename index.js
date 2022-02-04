const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Questions for README
const questions = [
	{
		// Title
		type: "input",
		name: "title",
		message: "Please enter a project title: ",
		validate: (titleInput) => {
			if (titleInput) {
				return true;
			} else {
				console.log("Please enter a project name!");
				return false;
			}
		},
	},
	{
		// Application Description
		type: "input",
		name: "description",
		message: "Please provide a description. ",
		validate: (descriptionInput) => {
			if (descriptionInput) {
				return true;
			} else {
				console.log("Please enter a project description");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "installation",
		message: "What your installation steps?",
		validate: (installationInput) => {
			if (installationInput) {
				return true;
			} else {
				console.log("Please state installation instructions.");
				return false;
			}
		},
	},
	{
		// How to install your software
		type: "input",
		name: "usage",
		message: "Provide instructions on how to use the application.",
		validate: (usageInput) => {
			if (usageInput) {
				return true;
			} else {
				console.log("Please provide usage instructions.");
				return false;
			}
		},
	},
	{
		type: "list",
		name: "license",
		message: "Select a license:",
		choices: ["Mozilla Public License 2.0", "GNU GPL v3", "MIT", "Apache 2.0", "Unlicensed"],
	},
	{
		type: "input",
		name: "contribution",
		message: "Please enter contribution rules for this project.",
		validate: (contributionInput) => {
			if (contributionInput) {
				return true;
			} else {
				console.log("Please enter contribution rules.");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "tests",
		message: "Provide testing instructions",
		validate: (testInput) => {
			if (testInput) {
				return true;
			} else {
				console.log("Please provide testing instructions");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "username",
		message: "What is your GitHub username? ",
		validate: (githubUsername) => {
			if (githubUsername) {
				return true;
			} else {
				console.log("You need to provide an username!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "email",
		message: "Enter an email:",
		validate: (emailInput) => {
			if (emailInput) {
				return true;
			} else {
				console.log("Please enter an email.");
				return false;
			}
		},
	},
];

// Writes README
function writeToFile(fileName, content) {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, content, (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "File created!",
			});});});}

// Initialization function
function init() {
	inquirer.prompt(questions)
		.then((data) => {return generateMarkdown(data);})
		.then((markdown) => {return writeToFile("./dist/README.md", markdown);});}

// Initialize call
init();
