import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { EmployeeGateway } from 'src/app/domain/models/employee/gateway/employee.gateway';
import { EmployeeService } from 'src/app/infrastructure/diven-adapter/employee/employee.service';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { CountryService } from 'src/app/infrastructure/diven-adapter/country/country.service';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { ZoneService } from 'src/app/infrastructure/diven-adapter/zone/zone.service';
import { DomainModule } from '../../domain/domain.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { ZonesComponent } from './zones/zones.component';
import { CountriesComponent } from './countries/countries.component';




@NgModule({
  declarations: [
    EmployeeComponent,
    ZonesComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DomainModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: EmployeeGateway, useClass: EmployeeService},
    {provide: CountryGateway, useClass: CountryService},
    {provide: ZoneGateway, useClass: ZoneService}
  ],
  exports: [
    EmployeeComponent,
    ZonesComponent,
    CountriesComponent
  ]
})
export class PageModule { }
