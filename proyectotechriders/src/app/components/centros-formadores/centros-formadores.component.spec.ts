import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosFormadoresComponent } from './centros-formadores.component';

describe('CentrosFormadoresComponent', () => {
  let component: CentrosFormadoresComponent;
  let fixture: ComponentFixture<CentrosFormadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentrosFormadoresComponent]
    });
    fixture = TestBed.createComponent(CentrosFormadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
