// 1. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.



class Author {
    constructor(name, email, gender) {
        this.name = name
        this.email = email
        this.gender = gender
    }
    toString() {

    }
}


class Book {
    constructor(title, price, quantity) {

        this._title = title
        this._price = price
        this._quantity = quantity
    }
    get title() {
        return this._title
    }
    set title(value) {
        return this._title = value
    }
    get price() {
        return this._price
    }
    set price(value) {
        return this._price = value
    }
    get quantity() {
        return this._quantity
    }
    set quantity(value) {
        return this._quantity = value
    }
    getProfit() {
        if (this._price >= 3000 && this._quantity >= 10000) {
            return ` The Profit is a goood `
        } else {
            return ` The Profit is  not a goood `
        }
    }
    toString() {
        return `The book with title${this._title}solds with ${this._price} AMD`
    }
}
// let book=new Book(' Bible Linux',3000,15000);
// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.




class Account {
    constructor(name, id, balance) {
        this._name = name
        this._id = id
        this._balance = balance
    }
    get name() {
        return this._name;
    };
    set name(name) {
        return this._name = name;
    };
    get id() {
        return this._id;
    };
    get balance() {
        return this._balance;
    };
    set balance(balance) {
        return this._balance = balance;
    };
    credit(amount) {
        return this._balance += amount;
    };
    debit(amount) {
        amount < this._balance ? this._balance -= amount : "Amount exceeded balance"
    }
    transferTo(anotherAccount, amount) {
        return this._balance > amount ? anotherAccount.balance += amount : 'Amount exceeded balance.'
    }
    static dentifyAccounts(accountFirst, accountSecond) {
        if (accountFirst._name === accountSecond._name && accountFirst._id === accountSecond._id && accountSecond._balance === accountFirst._balance) {
            return true
        } else {
            return false
        }


    }
}

let user = new Account('Kraken', 62374, 1);
let user2 = new Account('Kraken', 62374, 1);

// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.


class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    };
    get firstname() {
        return this.firstname;
    };
    set firstname(name) {
        return this.firstname = name;
    };
    get lastName() {
        return this._lastName;
    };
    set lastName(lastName) {
        return this._lastName = lastName;
    };
    get gender() {
        return this.gender;
    };
    set gender(gender) {
        return this._gender = gender;
    };
    get age() {
        return this._age;
    };
    set age(age) {
        return this._age = age;
    };
    toString() {
        return `${this._firstname} ${this._lastName} ${this._gender} ${this._age}`
    };
};
class Student extends Person {
    constructor(firstName, lastName, gender, age) {
        super(firstName, lastName, gender, age)
        this._year = 2022
        this._fee = []
    };
    get year() {
        return this._year
    };
    set year(year) {
        return this._year = year
    };
    get fee() {
        return this._fee
    };
    set fee(fee) {
        return this._fee = fee
    };
    passExam(grade) {
        return grade >= 50 || grade === 'good' ? year += 1 : `You didnt pass the examen`
    };
};
class Staff extends Person {
    constructor(pay) {
        super(firstName, lastName, gender, age)
        this._pay = pay
    };
    get pay() {
        return this._pay
    };
    set pay(pay) {
        return this._pay = pay
    };
    program(string) {
        return string === 'yes' ? this._pay = true : this._pay = false
    };
    string() {
        return `${this._pay}`
    };
};