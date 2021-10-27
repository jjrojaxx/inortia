import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasComponent } from './hipotecas.component';

describe('HipotecasComponent', () => {
  let component: HipotecasComponent;
  let fixture: ComponentFixture<HipotecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipotecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
