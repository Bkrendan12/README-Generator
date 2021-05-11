// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license
    ? `![License: ${license}](https://img.shields.io/badge/${escape(
        license
      )}-blue.svg)`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `This project is licensed by the ${license} license.` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [License](#License)
* [Questions](#Questions)

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribute}

## Test

${data.test}

## License

${renderLicenseSection(data.license)}

## Questions

${data.username}

${data.email}`;
}

module.exports = generateMarkdown;
