// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseInfo(license) {
    return `${licenseBadge(license)}
    [License Info](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  # Table of Contents
    - [DESCRIPTION](#Description)
    
    - [USAGE](#Usage)
    
    - [INSTALLATION](#Installation)
    
    - [LICENSE](#License)
    
    - [CREDITS/CONTRIBUTING](#Credits/contributors)
    
    - [TESTING](#Testing)
    
    - [CONTACT/QUESTIONS](#Questions/Concerns/or contact me!)
  
  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}
  
  ## License
  ${licenseInfo(data.License)}
  
  ## Credits/contributors:
  ${data.contributing}

  ## Testing
  ${data.test}

  ## Questions/Concerns/or contact me!
  GitHub Profile: [${data.contactGH}](https://www.github.com/${data.contactGH}
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
