// import { Component, Input, OnInit } from '@angular/core';
// import { IEmployeeModel } from 'src/app/domain/models/employee/employee.model';
// import { EmployeeUsecase } from 'src/app/domain/usecase/employee.usecase';
// import Swal from 'sweetalert2'
//
// @Component({
//   selector: 'app-lista-employee',
//   templateUrl: './lista-employee.component.html',
//   styleUrls: ['./lista-employee.component.css']
// })
// export class ListaEmployeeComponent implements OnInit {
//
//   // @Input() lista: IBirdModel[];
//   lista: IEmployeeModel[] | null = [];
//   currentBird: IEmployeeModel | null;
//   option: boolean = false;
//
//   constructor(private birdUseCase: EmployeeUsecase) { }
//
//   ngOnInit(): void {
//     this.showList();
//   }
//
//   agregar(){
//     this.option = true;
//   }
//
//   // async showList(){
//   //   await this.birdUseCase.findEmployees().subscribe(result => {
//   //     this.lista = result
//   //   });
//   //
//   // }
//
//   // async delete(id: number) {
//   //   await this.birdUseCase.deleteBird(id).subscribe(
//   //     result => {
//   //       Swal.fire({
//   //         position: 'center',
//   //         icon: 'success',
//   //         title: 'Eliminado',
//   //         showConfirmButton: false,
//   //         timer: 1500
//   //       });
//   //       this.showList();
//   //     }
//   //   )
//   // }
//   //
//   // async edit(id: number) {
//   //   this.option = true;
//   //   await this.birdUseCase.findBirdById(id).subscribe(result => {
//   //     this.currentBird = result;
//   //   });
//   // }
//
//   async setOption(opt: boolean){
//     await this.showList();
//     this.option = opt;
//   }
// }
