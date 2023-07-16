// class
abstract class Department {
   static fiscalYear = 2020;
  //   private readonly id: string;
  //   // public default
  //   private name: string;
  // private only access in class
  protected employees: string[] = [];

  // readonly is clear value that cannot change value
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
    
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  // method
  abstract describe(this: Department): void

  addEmployee(employee: string) {
    // validation
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
      console.log('It Department - ID: ' + this.id);
      
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
        return this.lastReport;
    }
    throw new Error('no report found.');
  }

  set mostRecentReport(value: string) {
    if(!value) {
        throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Account");
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
    
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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

const newAccount = new AccountingDepartment("D2", []);

newAccount.mostRecentReport = 'Year of report';
newAccount.mostRecentReport = 'Year of report2';


newAccount.addReport("Something went wrong...");
console.log(newAccount.mostRecentReport);

newAccount.addEmployee("Max");
newAccount.addEmployee("King");
// newAccount.printEmployeeInformation();

// newAccount.getReport();

newAccount.describe();

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