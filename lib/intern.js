const Employee = require('./Employee');


class intern extends Employee{
    constructor(name,id,email,school ){
        super(name,id,email);
        this.school = school;
        this.role = "intern";
    }
    getSchool(){
        return this.school;
    }
}

module.exports = intern;