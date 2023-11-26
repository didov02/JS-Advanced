function Person(firstName, lastName, birthDateString) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDateString = birthDateString
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

function Employee(firstName, lastName, birthDateString, job) {
    Person.call(this, firstName, lastName, birthDateString);
    this.job = job;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getJob = function() {
    return "Job: " + this.job;
}

var Ivan = new Employee('Ivan','Ivanov', '03.03.2003', 'cashier');
console.log(Ivan.getFullName());
console.log(Ivan.getJob());