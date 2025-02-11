import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposCharlasComponent } from './tipos-charlas.component';

describe('TiposCharlasComponent', () => {
  let component: TiposCharlasComponent;
  let fixture: ComponentFixture<TiposCharlasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposCharlasComponent]
    });
    fixture = TestBed.createComponent(TiposCharlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
