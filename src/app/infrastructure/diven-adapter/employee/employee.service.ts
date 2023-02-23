import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployeeModel } from 'src/app/domain/models/employee/employee.model';
import { EmployeeGateway } from 'src/app/domain/models/employee/gateway/employee.gateway';
import { IEmployeeRequest } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends EmployeeGateway{

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  API:string = 'http://localhost:8082/employee';

  constructor(public http: HttpClient) {
    super();
   }

  saveEmployee(params: IEmployeeRequest): Observable<IEmployeeModel> {
    return this.http.post<IEmployeeModel>(this.API, params, {
      headers: this.httpHeaders
    });
  }

  updateBird(params: IEmployeeRequest): Observable<IEmployeeModel> {
    return this.http.put<IEmployeeModel>(this.API, params, {
      headers: this.httpHeaders
    })
  }

  findBirdById(id: number): Observable<IEmployeeModel> {
    return this.http.get<IEmployeeModel>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  }

  findBirds(): Observable<IEmployeeModel[]> {
    return this.http.get<Array<IEmployeeModel>>(this.API, {
      headers: this.httpHeaders
    })
  }

  deleteBird(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  }

}
