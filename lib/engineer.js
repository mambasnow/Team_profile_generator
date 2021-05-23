const Employee = require('./Employee');


class engineer extends Employee{
    constructor(name,id,email, github){
        super(name,id,email);
        this.role = role;
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}



module.exports = engineer;