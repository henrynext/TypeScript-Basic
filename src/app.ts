// class
class Department {
//   private readonly id: string;
//   // public default
//   private name: string;
  // private only access in class
  private employees: string[] = [];


  // readonly is clear value that cannot change value
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // method
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Account');
    
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReport() {
        console.log(this.reports);
        
    }
}



const accounting = new ITDepartment("d1", ['Henry']);

accounting.addEmployee("Max");
accounting.addEmployee("Max2");
accounting.addEmployee("Max3");
accounting.addEmployee("Max4");

// accounting.employees[2] = 'Henry';

accounting.printEmployeeInformation();

// const law = new Department("law");
// law.describe();
accounting.describe();

console.log(accounting);

const newAccount = new AccountingDepartment('D2', []);

newAccount.addReport('Something went wrong...');

newAccount.getReport();



// accounting.name = "new name";
// console.log(accounting.name);

// const accountingCopy = { name: "s", describe: accounting.describe };

// accountingCopy.describe();
