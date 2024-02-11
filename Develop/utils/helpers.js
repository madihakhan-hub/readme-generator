function generateREADME(answers) {
    return `
# ${answers.name}

## Description 
${answers.message}
`;
}

module.exports = generateREADME;