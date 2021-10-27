import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreestudioComponent } from './preestudio.component';

describe('PreestudioComponent', () => {
  let component: PreestudioComponent;
  let fixture: ComponentFixture<PreestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreestudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
