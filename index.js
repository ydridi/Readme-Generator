const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./api");
const generateMarkdown = require("./generatemarkdown");

    const questions = [
        {
         type: "input",
         name: "name",
         message: "what is your title project name?",
      
      },
        {
          type: "input",
          name: "user",
          message: "what is your github user name?",
        },
        {
          type: "input",
          name: "email",
          message: "what is your github email?",
        },
        {
            type: "input",
            name: "Description",
            message: "what is the Description?",
          },
          {
            type: "input",
            name: "tableofcontents",
            message: "what is the Table of Contents used?",
          },
          {
            type: "input",
            name: "usage",
            message: "what is the Usage?",
          },
          {
            type: "input",
            name: "license",
            message: "what is the License?",
          },
          {
            type: "input",
            name: "questions",
            message: "what is the Questions?",
          },
          {
            type: "input",
            name: "tests",
            message: "what is the Tests?",
          },
          {
            type: "input",
            name: "contributing",
            message: "what is the Contributing?",
          }
        
      ];
      
      function writeToFile(fileName, data) {
       fs.writeFileSync(fileName, data)

      }
      
      async function init() {
        console.log("hi")
        try {
         const answers = await inquirer.prompt(questions);
         const data = await api.getUser(answers.user);
         console.log("data received");
         console.log(data.data.id)
          
          } catch(err) {
            console.log("I catch an error !")
          console.log(err);
        }
      }
      
      init();
