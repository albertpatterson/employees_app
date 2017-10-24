import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TablesTabComponent } from './tables-tab/tables-tab.component';
import { UpdateTabComponent } from './update-tab/update-tab.component';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { HttpModule } from '@angular/http';

import { DatabaseService } from "./services/database.service";
import { DataTableComponent } from './data-table/data-table.component';
import { FilterableEmployeeDataComponent } from './filterable-employee-data/filterable-employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TablesTabComponent,
    UpdateTabComponent,
    CustomTabComponent,
    DataTableComponent,
    FilterableEmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
