import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
// import { ListaEmployeeComponent } from './lista-employee/lista-employee.component';
import { AddEmployeeComponent } from './lista-employee/add-employee/add-employee.component';
import { ListaCountriesComponent } from './lista-countries/lista-countries.component';
import { AddContryComponent } from './lista-countries/add-contry/add-contry.component';
import { ListaZonesComponent } from './lista-zones/lista-zones.component';
import { AddZoneComponent } from './lista-zones/add-zone/add-zone.component';



@NgModule({
  declarations: [
    NabvarComponent,
    // ListaEmployeeComponent,
    AddEmployeeComponent,
    ListaCountriesComponent,
    AddContryComponent,
    ListaZonesComponent,
    AddZoneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    NabvarComponent,
    // ListaEmployeeComponent,
    ListaCountriesComponent,
    ListaZonesComponent
  ]
})
export class ComponentsModule { }
