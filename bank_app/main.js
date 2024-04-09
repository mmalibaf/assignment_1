class BankAccount {
    constructor(accountNo, ownerName, balance) {
        this.accountNo = accountNo;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account no: ${this.accountNo}.\nBalance after deposit: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account no: ${this.accountNo}.\nNet balance after withdraw: ${this.balance}`);
        } else {
            console.log(`Invalid withdrawal amount or insufficient balance acct no: ${this.accountNo}`);
        }
    }

    displayInfo() {
        console.log(`Account Information:
            Account No: ${this.accountNo}
            Owner Name: ${this.ownerName}
            Balance: ${this.balance}`);
    }
}

// Creating instances of BankAccount
const account1 = new BankAccount(11111, "Murad", 2000);
const account2 = new BankAccount(22222, "Zaman", 3000);

// Demonstrating functionality
account1.displayInfo();
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(3000); // Should fail due to insufficient balance
account1.displayInfo();

account2.displayInfo();
account2.deposit(1000);
account2.withdraw(500);
account2.displayInfo();
