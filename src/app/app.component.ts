import { Component } from '@angular/core';
import { BankService } from './service';
import { BankAccount } from './model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    ngOnInit() {
        this.showBankAccounts()
    }

    constructor(private bankService: BankService) {

    }

    bankAccountDetails: BankAccount[] = []


    showBankAccounts() {
        this.bankService.getBankAccounts().subscribe((data: BankAccount[]) => {

            data.forEach((element, i) => {
                let bankAccountDetail: BankAccount
                bankAccountDetail = { AccountNo: element["Account No"], BalanceAMT: element["Balance AMT"], Date: element["Date"], DepositAMT: element["Deposit AMT"], TransactionDetails: element["Transaction Details"], ValueDate: element["Value Date"], WithdrawalAMT: element["Withdrawal AMT"], Index: i + 1 }

                this.bankAccountDetails.push(bankAccountDetail)
            });

            console.log("Data= ", this.bankAccountDetails)

        })
    }

}
