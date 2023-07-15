// class
class Department {
    name: string;
    
    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');
const law = new Department('law');
console.log(accounting);
console.log(law);

