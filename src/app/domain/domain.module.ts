import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeUsecase } from './usecase/employee.usecase';
import { CountryUseCase } from './usecase/country.usecase';
import { ZoneUseCase } from './usecase/zone.usecase';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EmployeeUsecase,
    CountryUseCase,
    ZoneUseCase
  ]
})
export class DomainModule { }
