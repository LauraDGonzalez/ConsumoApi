import { Observable } from "rxjs";
import { IEmployeeRequest } from "src/app/infrastructure/diven-adapter/employee/employee.model";
import { IEmployeeModel } from "../employee.model";

export abstract class EmployeeGateway {
  abstract saveEmployee(params: IEmployeeRequest): Observable<IEmployeeModel>;

//   abstract updateBird(params: IBirdRequest): Observable<IBirdModel>;
//
//   abstract findBirdById(id: number): Observable<IBirdModel>;
//
//   abstract findBirds(): Observable<Array<IBirdModel>>;
//
//   abstract deleteBird(id: number): Observable<boolean>;
}
