"use strict";
// class
class Department {
    // readonly is clear value that cannot change value
    constructor(id, name) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
        this.id = id;
        this.name = name;
        //   private readonly id: string;
        //   // public default
        //   private name: string;
        // private only access in class
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // validation
        // this.id = 'd2';
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log('It Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Account");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReport() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Angel');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Henry"]);
it.addEmployee("Max");
it.addEmployee("Max2");
it.addEmployee("Max3");
it.addEmployee("Max4");
// accounting.employees[2] = 'Henry';
it.printEmployeeInformation();
// const law = new Department("law");
// law.describe();
it.describe();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = 'Year of report';
accounting.mostRecentReport = 'Year of report2';
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("King");
// newAccount.printEmployeeInformation();
// newAccount.getReport();
accounting.describe();
// accounting.name = "new name";
// console.log(accounting.name);
// const accountingCopy = { name: "s", describe: accounting.describe };
// accountingCopy.describe();
// class manageDepartment extends Department {
//     constructor(id: string, private hire: string[]) {
//       super(id, "Management");
//     }
//     doHiring(employee: string) {
//       this.hire.push(employee);
//     }
//     getHiringList() {
//       console.log(this.hire);
//     }
//   }
//   const management = new manageDepartment("d3", []);
//   management.doHiring("Henry2");
//   management.doHiring("Henry3");
//   management.doHiring("Henry4");
//   management.getHiringList();
