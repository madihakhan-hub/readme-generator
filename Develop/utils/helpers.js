function generateREADME(answers) {
    return `
# ${answers.title}

## Description 
${answers.Description}
`;
}

module.exports = generateREADME;