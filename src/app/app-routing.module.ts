import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './ui/pages/employee/employee.component';
import { CountriesComponent } from './ui/pages/countries/countries.component';
import { ZonesComponent } from './ui/pages/zones/zones.component';
import {AddEmployeeComponent} from "./ui/components/lista-employee/add-employee/add-employee.component";

const routes: Routes = [
  {path: 'employee', component: AddEmployeeComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'zones', component: ZonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
