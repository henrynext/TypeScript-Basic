// class
class Department {
    name: string;
    
    constructor(n: string) {
        this.name = n;
    }

    // method
    describe() {
        console.log('Department: ' + this.name);
        
    }
}

const accounting = new Department('Accounting');
const law = new Department('law');
law.describe();
accounting.describe();

const accountingCopy = { describe: accounting.describe};

accountingCopy.describe();

