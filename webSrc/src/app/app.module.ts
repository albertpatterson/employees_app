import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TablesTabComponent } from './tables-tab/tables-tab.component';
import { EmployeeDataTabComponent } from './employee-data-tab/employee-data-tab.component';
import { HttpModule } from '@angular/http';

import { DatabaseService } from "./services/database.service";
import { DataTableComponent } from './data-table/data-table.component';
import { EmployeeDataUpdateFormComponent } from './employee-data-update-form/employee-data-update-form.component';
import { EmployeeDataFilterFormComponent } from './employee-data-filter-form/employee-data-filter-form.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TablesTabComponent,
    EmployeeDataTabComponent,
    DataTableComponent,
    EmployeeDataUpdateFormComponent,
    EmployeeDataFilterFormComponent,
    LoadingIndicatorComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
