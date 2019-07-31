export class Customer{
    cif: string;
    firstName: string;
    lastName: string;
    balance : number = 1000;

    constructor(cif, firstName, lastName){
        this.cif = cif;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    detail(name?){
        return `${this.cif} - ${this.firstName} - ${name ? name : this.lastName}`;
    }
}