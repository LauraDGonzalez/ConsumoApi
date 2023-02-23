import { Injectable } from "@angular/core";
import { EmployeeGateway } from '../models/employee/gateway/employee.gateway';
import { IEmployeeRequest } from '../../infrastructure/diven-adapter/employee/employee.model';
import { Observable, of } from 'rxjs';
import { IEmployeeModel } from "../models/employee/employee.model";
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeUsecase {

  constructor(private employeeGateway:EmployeeGateway){

  }

  saveEmployee(params: IEmployeeRequest):Observable<IEmployeeModel | null>{
    return this.employeeGateway.saveEmployee(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  // updateBird(params: IEmployeeRequest): Observable<IEmployeeModel | null>{
  //   return this.employeeGateway.saveEmployee(params).pipe(
  //     catchError(()=>{
  //       return of(null);
  //     })
  //   )
  // }
  //
  // findBirdById(id: number): Observable<IEmployeeModel | null>{
  //   return this.employeeGateway.findBirdById(id).pipe(
  //     catchError(()=>{
  //       return of(null);
  //     })
  //   )
  // }
  //
  // findBirds(): Observable<Array<IEmployeeModel> | null>{
  //   return this.employeeGateway.findBirds().pipe(
  //     catchError(()=>{
  //       return of(null);
  //     })
  //   )
  // }
  //
  // deleteBird(id: number): Observable<boolean | null>{
  //   return this.employeeGateway.deleteBird(id).pipe(
  //     catchError(()=>{
  //       return of(null);
  //     })
  //   )
  // }
}
