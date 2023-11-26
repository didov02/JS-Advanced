var commonLogic = {
    getName: function() {
        return (this.name || this.firstName) + (this.lastName ? ' ' + this.lastName : ' ');
    },
    getAge: function() {
        const ageInMilliseconds = +(new Date()) - this.birthDateTimestamp;
        return ageInMilliseconds / (1000 * 60 * 60 * 24 * 365)
    },
}

var employeeLogic = {
    setSalary: function(startDateString, salary) {
        this.employeeHistory = this.employeeHistory || [];
        this.employeeHistory.push({
            startDateTimestamp: +(new Date(startDateString)),
            salary: salary
        })
    },
    getCurrentSalary: function() {
        this.employeeHistory = this.employeeHistory || [];
        return this.employeeHistory[this.employeeHistory.length - 1] || null;
    },
    getPreviousSalary: function() {
        this.employeeHistory = this.employeeHistory || [];
        return this.employeeHistory[this.employeeHistory.length - 2] || null;
    }
}

function createPerson(firstName, lastName, birthDateString) {
    return {
        firstName: firstName, 
        lastName: lastName,
        birthDateTimestamp: +new Date(birthDateString),
        test: function() {
            console.log('test');
        }
    };
}

function copyObjectProps(source, target) {
    target = target || {};
    for (var prop in source) {
        target[prop] = source[prop];
    }

    return target;
}

function mixin() {
    var target = copyObjectProps(arguments[0]);
    for(var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        copyObjectProps(source, target);
    }

    return target;
}
    
var ivan = createPerson('Ivan', 'Ivanov', '01.01.2002');
var extendedIvan = mixin(ivan, commonLogic, employeeLogic);
