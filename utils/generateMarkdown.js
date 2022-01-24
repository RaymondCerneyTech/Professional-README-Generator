function generateMarkdown(data) {
	tableOfContents = [];
	tableOfContents.push("[Description](#description)");
	if (data.confirmInstall) {
		tableOfContents.push("[Installation](#installation)");
	}
	if (data.confirmUsage) {
		tableOfContents.push("[Usage](#usage)");
	}
	if (data.confirmContribution) {
		tableOfContents.push("[Contributing](#contributing)");
	}
	if (data.confirmTests) {
		tableOfContents.push("[Tests](#tests)");
	}
	if (data.confirmLicense) {
		tableOfContents.push("[License](#license)");
	}
	if (data.confirmContact) {
		tableOfContents.push("[Questions](#questions)");
	}

	// Add Title, Description, and TOC header
	content = `
# ${data.title}
`;

	if (data.confirmLicense) {
		content += `
![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license.replace(/ /g, "%20")}&color=blue)
`;
	} else {
		return "";
	}

	content += `
## Description
${data.description}
## Table of Contents
`;

	// Table Of Contents
	tableOfContents.forEach((item) => {
		content += `- ${item}
`;
	});

	// Optionals:

	// Install instructions
	if (data.confirmInstall) {
		content += `
## Installation
${data.install}
`;
	}

	// Manual
	if (data.confirmUsage) {
		content += `
## Usage
${data.usage}
`;
	}

	// Contributors
	if (data.confirmContribution) {
		content += `
    
## Contribution
${data.contribution}
`;
	}

	// Testing
	if (data.confirmTests) {
		content += `
    
## Tests
${data.tests}
`;
	}

	// Licensing
	if (data.confirmLicense) {
		content += `
    
## License
This code is covered under the${data.license}
`;
	}

	// Questions
	if (data.confirmContact) {
		content += `
    
## Questions
- My [GitHub](https://github.com/${data.githubUsername})
- My [Email](mailto:${data.email})
`;
	}

	return content;
} // End Function

module.exports = generateMarkdown;
