const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
    {   type: 'input',
        message: 'You can only fit three characters on your logo. Please choose wisely:',
        name: 'text',
    },
    {   type:'list',
        message: 'What color do you want the shape to be',
        choices: ['red','orange','yellow','green','blue','purple']
    },
    {
        type: 'list',
        message: 'What shape do you want the logo to be',
        choices:['Square','Triangle','Circle']
    },
    ])
    .then((answers) => {
        const logoContent = generatedLogo(answers);

        fs.writeFile('New Logo', logoContent, (err)=>
        err ? console.log(err) : console.log('Succesfully created your new Logo!'))
    });