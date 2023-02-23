import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmployeeComponent } from './lista-employee.component';

describe('ListaBirdsComponent', () => {
  let component: ListaEmployeeComponent;
  let fixture: ComponentFixture<ListaEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
