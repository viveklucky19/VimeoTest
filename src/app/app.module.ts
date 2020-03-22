import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BankService } from './service';
import { DataTableModule } from "angular2-datatable";
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DataTableModule,
        AngularFontAwesomeModule
    ],
    providers: [BankService],
    bootstrap: [AppComponent]
})
export class AppModule { }
