import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeUsecase} from 'src/app/domain/usecase/employee.usecase';
import {IEmployeeRequest} from '../../../../infrastructure/diven-adapter/employee/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() option = new EventEmitter<boolean>();
  dni: number;
  name: string;
  dateContract: string;
  post: string;
  linked: boolean;
  currenSalary: number;

  activo: boolean = true;

  constructor(private employeeUsecase: EmployeeUsecase) {
  }

  ngOnInit(): void {
  }

  async guardar() {
    const data = {

      dni: this.dni,
      name: this.name,
      dateContract: this.dateContract,
      post: this.post,
      linked: this.linked,
      currenSalary: this.currenSalary,

    }

    await this.employeeUsecase.saveEmployee(data).subscribe(result => {
      alert(`Se ha guardado el empleado ${data.name}`)
      this.name = '';
      this.dni = 0;
      this.dateContract = '';
      this.post = '';
      this.linked = false;
      this.currenSalary = 0;

      this.option.emit(false);
    })
  }

  @Input()
  set employee(item: IEmployeeRequest | null) {
    if (item != null) {
      // @ts-ignore

      //@ts-ignore
      this.dni = item.dni;
      this.name = item.name;

      this.dateContract = item.dateContract;
      this.post = item.post;
      this.linked = item.linked;
      this.currenSalary = item.currenSalary;

      this.activo = false;
    }
  }

  // async editBird() {
  //   const data = {
  //     id: this.id,
  //     commonName: this.name,
  //     scientificName: this.cName
  //   }
  //   this.employeeUsecase.updateBird(data).subscribe(result => {
  //     alert('employee actualizado');
  //     this.option.emit(false);
  //   })
  //   this.activo = true;
  // }

}
