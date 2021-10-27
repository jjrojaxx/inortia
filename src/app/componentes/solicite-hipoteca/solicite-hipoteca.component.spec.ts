import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliciteHipotecaComponent } from './solicite-hipoteca.component';

describe('SoliciteHipotecaComponent', () => {
  let component: SoliciteHipotecaComponent;
  let fixture: ComponentFixture<SoliciteHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoliciteHipotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliciteHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
