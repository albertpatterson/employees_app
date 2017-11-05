import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams  } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";

/**
 * defines a service for sending requests to query and update employee data
 * 
 * @export
 * @class DatabaseService
 */
@Injectable()
export class DatabaseService {

  /**
   * url to access the table meta data
   * 
   * @private
   * @type {string}
   * @memberof DatabaseService
   */
  private _tableNamesUrl: string = "databaseData";

  /**
   * url to access the table data
   * 
   * @private
   * @type {string}
   * @memberof DatabaseService
   */
  private _tableDataUrl: string = "tableData";

  /**
   * url to access the detailed employee data
   * 
   * @private
   * @type {string}
   * @memberof DatabaseService
   */
  private _FullEmployeeDataUrl: string = "fullEmployeeData";

  /**
   * Creates an instance of DatabaseService.
   * @param {Http} http 
   * @memberof DatabaseService
   */
  constructor(private http: Http) { }

  /**
   * get the names of the tables in the database
   * 
   * @returns {Promise<string[]>} promise to be resolved when the response to the request is received
   * @memberof DatabaseService
   */
  public getTableNames(): Promise<string[]>{
    return this.http.get(this._tableNamesUrl)
          .toPromise()
          .then((resp: Response)=>resp.json());
  }

  /**
   * get raw data stored in a table
   * 
   * @param {string} tableName the name of the table to access
   * @returns {Promise<any>} promise to be resolved when the response to the request is received
   * @memberof DatabaseService
   */
  public getTableData(tableName: string): Promise<any>{
    
    let search = new URLSearchParams();
    search.append("tableName", tableName);

    return this.http.get(this._tableDataUrl, {search})
          .toPromise()
          .then((resp: Response)=>resp.json());
  }


  /**
   * get the detailed employee data
   * 
   * @param {Filter} filter defines what data to select
   * @returns {Promise<String[]>} promise to be resolved when the response to the request is received
   * @memberof DatabaseService
   */
  public getFullEmployeeData(filter: Filter): Promise<String[]>{

    let search = new URLSearchParams();
    search.append("genderM", filter.genderM.toString())
    search.append("genderF", filter.genderF.toString())
    search.append("limit", filter.limit.toString())

    return this.http.get(this._FullEmployeeDataUrl, {search})
    .toPromise()
    .then((resp: Response)=>resp.json());
  }

  /**
   * update an existing employees data
   * 
   * @param {string} emp_no the employee id number
   * @param {*} updates updates to apply to the employee's data
   * @returns {Promise<any>} promise to be resolved when the response to the request is received
   * @memberof DatabaseService
   */
  public updateEmployee(emp_no: string, updates: any): Promise<any>{
    
    let url: string = this._FullEmployeeDataUrl;
    url+="?emp_no="+emp_no;
    let attrs: string[] = [];
    let values: string[] = [];
    let search = new URLSearchParams();

    for(let field in updates){
      attrs.push(field);
      values.push(updates[field]);
    }
    url+=`&attrs=${attrs.join(",")}&values=${values.join(",")}`;

    return this.http.put(url, search)
          .toPromise()
          .then((resp: Response)=>resp.json());
  }


  /**
   * add a new employee
   * 
   * @param {Employee} employee the data of the new employee
   * @returns {Promise<any>} promise to be resolved when the response to the request is received
   * @memberof DatabaseService
   */
  public addEmployee(employee: Employee): Promise<any>{

    let search = new URLSearchParams();
    search.append("birth_date",employee.birth_date);
    search.append("first_name",employee.first_name);
    search.append("last_name",employee.last_name);
    search.append("gender",employee.gender);
    search.append("hire_date",employee.hire_date);
    search.append("title",employee.title);
    search.append("dept_name",employee.dept_name);
    search.append("salary",employee.salary);

    return this.http.post(this._FullEmployeeDataUrl, search)
          .toPromise()
          .then((resp: Response)=>resp.json());
  }
}
