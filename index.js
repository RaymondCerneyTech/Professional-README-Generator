var inquirer = require("inquirer");
//File system
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// An array of various questions to generate the readme
const questions = [
	{
		// Title
		type: "input",
		name: "title",
		message: "Please enter a project title: ",
		validate: (answer) => {
			if (answer) {
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
		message: "Please provide a description: ",
	},
	{
		type: "confirm",
		name: "confirmInstall",
		message: "Do you want to add installation instructions? ",
		default: true,
	},
	{
		// How to install your software
		type: "input",
		name: "install",
		message: "Enter instructions: ",
		when: ({ confirmInstall }) => confirmInstall,
	},
	{
		type: "confirm",
		name: "confirmUsage",
		message: "Do you want to add usage instructions? ",
		default: true,
	},
	{
		// How to use your software
		type: "input",
		name: "usage",
		message: "Please enter usage instructions: ",
		when: ({ confirmUsage }) => confirmUsage,
	},
	{
		type: "confirm",
		name: "confirmContribution",
		message: "Do you want to add Contribution guidelines? ",
		default: false,
	},
	{
		// Asks if you want contribution and what the instructions are
		type: "input",
		name: "contribution",
		message: "Please enter contribution instructions: ",
		when: ({ confirmContribution }) => confirmContribution,
	},
	{
		// Do you want tests included and what are your instructions?
		type: "confirm",
		name: "confirmTests",
		message: "Do you want to add tests?",
		default: false,
	},
	{
		type: "input",
		name: "tests",
		message: "Please include tests to run, and their instructions: ",
		when: ({ confirmTests }) => confirmTests,
	},
	{
		// Asks if license is desired
		type: "confirm",
		name: "confirmLicense",
		message: "Would you like to add a license? ",
		default: true,
	},
	{
		// List of licenses
		type: "list",
		name: "license",
		message: "Please select license to use: ",
		choices: ["[None]", "Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"],
		when: ({ confirmLicense }) => confirmLicense,
	},
	{
		type: "confirm",
		name: "confirmContact",
		message: "Do you want to add contact info? ",
		default: true,
	},
	{
		// Requests github information
		type: "input",
		name: "githubUsername",
		message: "What is your GitHub Username? ",
		when: ({ confirmContact }) => confirmContact,
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address? ",
		when: ({ confirmContact }) => confirmContact,
	},
];

// Writes README to a file
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
			});
		});
	});
}

// Initializer, prompts questions, writes data, returns a file
function init() {
	inquirer
		.prompt(questions)
		.then((data) => {
			return generateMarkdown(data);
		})
		.then((markdown) => {
			return writeToFile("./dist/README.md", markdown);
		});
}

// Function call to initialize app
init();
