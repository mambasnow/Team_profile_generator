const inquirer = require('inquirer');
const fs = require('fs');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const util = require('util');
const html = require('../Team_profile_generator/src/template');


const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);


let teamArr = [];
let teamStr = '';


async function start() {
    try {
         await prompt()

         for (let i = 0; i < teamArr.length; i++) {
   
              teamStr = teamStr + html.genCard(teamArr[i]);
         }

         let newHTML = html.genTemplate(teamStr);

         console.log(teamStr)



         //write file 
         writeFile("./output/index.html", newHTML)


    } catch (err) {
         return console.log(err);
    }

};


async function prompt() {
    let responseDone = "";
    // prompt to collect input and use do while atleast one and do it number of times depending on the while condition
    do {
         try {
              response = await inquirer.prompt([

                   {
                        type: "input",
                        name: "name",
                        message: "Enter Employee's name: "
                   },
                   {
                        type: "input",
                        name: "id",
                        message: "Enter Employee ID#: "
                   },
                   {
                        type: "input",
                        name: "email",
                        message: "Employee's email address: "
                   },
                   {
                        type: "list",
                        name: "role",
                        message: "Select employee's role:",
                        choices: [
                             "Engineer",
                             "Intern",
                             "Manager"
                        ]
                   }
              ]);

              let response2 = ""
              // if else statement

              if (response.role === "Engineer") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "github",
                        message: "What is the employee's github username?:",
                   }, ]);
                   //store the object and push
                   const Engineer = new engineer(response.name, response.id, response.email, response2.github);
                   teamArr.push(Engineer);
              }  
              if (response.role === "Intern") {
                   response2 = await inquirer.prompt([{
                        type: "input",

                        //the x is to only store into the team array
                        name: "school",
                        message: "Eneter Intern's school:",
                   }, ]);
                   //store the object and push
                   const Intern = new intern(response.name, response.id, response.email, response2.school);
                   teamArr.push(Intern);
              } 
              
              if (response.role === "Manager") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "officeNumber",
                        message: "What is the employee's office #:",
                   }, ]);
                   //store the object and push
                   const Manager = new manager(response.name, response.id, response.email, response2.officeNumber);
                   teamArr.push(Manager);
              }
         } catch (err) {
              return console.log(err);
         }
         console.log(teamArr)
         //need to prompt do you want to continue

         responseDone = await inquirer.prompt([{
              type: "list",
              name: "finish",
              message: "Add Another Employee?",
              choices: [
                   "Yes",
                   "No"
              ]
         }, ]);

        } while (responseDone.finish === "Yes");
    }


   

    start();