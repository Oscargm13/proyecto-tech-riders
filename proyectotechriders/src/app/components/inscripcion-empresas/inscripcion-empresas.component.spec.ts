import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionEmpresasComponent } from './inscripcion-empresas.component';

describe('InscripcionEmpresasComponent', () => {
  let component: InscripcionEmpresasComponent;
  let fixture: ComponentFixture<InscripcionEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscripcionEmpresasComponent]
    });
    fixture = TestBed.createComponent(InscripcionEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
