import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BankService {
    constructor(private http: HttpClient) { }
    BankUrl = " http://starlord.hackerearth.com/bankAccount"


    getBankAccounts() {
        return this.http.get(this.BankUrl);
    }

}