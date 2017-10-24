import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams  } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

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

  public getFullEmployeeData(): Promise<String[]>{
    return this.http.get(this._FullEmployeeDataUrl)
    .toPromise()
    .then((resp: Response)=>resp.json());
  }
}
