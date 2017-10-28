import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams  } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

import { Filter } from "../utils/Filter";

@Injectable()
export class DatabaseService {


  private _tableNamesUrl: string = "databaseData";
  private _tableDataUrl: string = "tableData";
  private _FullEmployeeDataUrl: string = "fullEmployeeData";

  constructor(private http: Http) { }


  public getTableNames(): Promise<string[]>{

    console.log('send get');
    return this.http.get(this._tableNamesUrl)
          .toPromise()
          .then((resp: Response)=>resp.json());
  }

  public getTableData(tableName: string): Promise<any>{
    
    let search = new URLSearchParams();
    search.append("tableName", tableName);


    console.log('send get');
    return this.http.get(this._tableDataUrl, {search})
          .toPromise()
          .then((resp: Response)=>resp.json());
  }

  public getFullEmployeeData(filter: Filter): Promise<String[]>{

    let search = new URLSearchParams();
    search.append("genderM", filter.genderM.toString())
    search.append("genderF", filter.genderF.toString())
    search.append("limit", filter.limit.toString())

    return this.http.get(this._FullEmployeeDataUrl, {search})
    .toPromise()
    .then((resp: Response)=>resp.json());
  }

  public updateEmployee(emp_no: string, updates: any): Promise<any>{
    
        console.log(arguments);

        let url: string = this._FullEmployeeDataUrl;
        url+="?emp_no="+emp_no;
        let attrs: string[] = [];
        let values: string[] = [];
        let search = new URLSearchParams();
        // search.append("emp_no", emp_no)

        for(let field in updates){
          // search.append(field, updates[field]);
          // url+=`&${field}=${updates[field]}`;
          attrs.push(field);
          values.push(updates[field]);
        }
        url+=`&attrs=${attrs.join(",")}&values=${values.join(",")}`;
        // console.log(search);
        // return this.http.put(this._FullEmployeeDataUrl, search)
        return this.http.put(url, search)
        .toPromise()
        .then((resp: Response)=>resp.json());
      }


}
