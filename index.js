
//declaring variables and methods
// importing in required frameworks
const inquirer = require('inquirer');
const fs = require('fs');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const util = require('util');
const html = require('../Team_profile_generator/src/template');


const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

//setting a blank teamarray to store employee data
let teamArr = [];
// empty string to be used to store team data as string for html
let teamStr = '';


async function start() {
    try {
         await prompt()
        //iterating the team array 
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
    // questionairre using inquierer to store data 
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

              let extenderRes = ""
              // if else statement

              if (response.role === "Engineer") {
                extenderRes = await inquirer.prompt([{
                        type: "input",
                        name: "github",
                        message: "What is the employee's github username?:",
                   }, ]);
                   //pushes engineer to the teamArray
                   const Engineer = new engineer(response.name, response.id, response.email, extenderRes.github);
                   teamArr.push(Engineer);
              }  
              if (response.role === "Intern") {
                extenderRes = await inquirer.prompt([{
                        type: "input",
                        name: "school",
                        message: "Eneter Intern's school:",
                   }, ]);
                   //pushes intern to the teamArray
                   const Intern = new intern(response.name, response.id, response.email, extenderRes.school);
                   teamArr.push(Intern);
              } 
              
              if (response.role === "Manager") {
                extenderRes = await inquirer.prompt([{
                        type: "input",
                        name: "officeNumber",
                        message: "What is the employee's office #:",
                   }, ]);
                   //pushes manager to the teamArray
                   const Manager = new manager(response.name, response.id, response.email, extenderRes.officeNumber);
                   teamArr.push(Manager);
              }
         } catch (err) {
              return console.log(err);
         }
         
         //If user has more  employees to ask will ask if they want to continue

         complete = await inquirer.prompt([{
              type: "list",
              name: "finish",
              message: "Add Another Employee?",
              choices: [
                   "Yes",
                   "No"
              ]
         }, ]);

        } while (complete.finish === "Yes");
    }


   

    start();