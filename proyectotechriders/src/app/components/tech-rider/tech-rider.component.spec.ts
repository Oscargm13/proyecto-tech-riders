import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRiderComponent } from './tech-rider.component';

describe('TechRiderComponent', () => {
  let component: TechRiderComponent;
  let fixture: ComponentFixture<TechRiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechRiderComponent]
    });
    fixture = TestBed.createComponent(TechRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
