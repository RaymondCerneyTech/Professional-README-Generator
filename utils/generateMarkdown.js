function generateMarkdown(data) {
	tableOfContents = [];
	tableOfContents.push("[Description](#description)");
	if (data.confirmInstall) {
		tableOfContents.push("[Installation](#installation)");
	}
	if (data.confirmUsage) {
		tableOfContents.push("[Usage](#usage)");
	}
	if (data.confirmLicense) {
		tableOfContents.push("[License](#license)");
	}
	if (data.confirmContribution) {
		tableOfContents.push("[Contribution](#contribution)");
	}
	if (data.confirmTests) {
		tableOfContents.push("[Tests](#tests)");
	}
	if (data.confirmContact) {
		tableOfContents.push("[Contact](#contact)");
	}

//Title
	content = `# ${data.title}`;
//Description
	content += `## Description
${data.description}
## Table of Contents`;
//Table of Contents
	tableOfContents.forEach((item) => {
		content += `- ${item}`;
	});
//Install
	if (data.confirmInstall) {
		content += `## Installation
${data.install}`;
	}
//Usage
	if (data.confirmUsage) {
		content += `## Usage
	${data.usage}`;
	}

	// Contribution
	if (data.confirmContribution) {
		content += `## Contribution
	${data.contribution}`;
	}

	// Tests
	if (data.confirmTests) {
		content += `## Tests 
		${data.tests}`;
	}
//License
	if (data.confirmLicense) {
		content += `## License
		This code is covered under the `;
		if (data.license == "MIT") {
			content += `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
			content += `(https://opensource.org/licenses/MIT)`;
		}
		else if (data.license == "Apache 2.0") {
			content += `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			content += `(https://opensource.org/licenses/Apache-2.0)`;
		}
		else if (data.license == "GNU GPL v3") {
			content += `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
			content += `(https://www.gnu.org/licenses/gpl-3.0)`;
		}
		else if (data.license == "Mozilla Public License 2.0") {
			content += `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
			content += `(https://opensource.org/licenses/MPL-2.0)`;
		}
	}

//Username and Email	
	if (data.confirmContact) {
		content += `## Contact
- My [GitHub](https://github.com/${data.githubUsername})
- My [Email](mailto:${data.email})`;
	}
	return content;
}

	module.exports = { generateMarkdown };
