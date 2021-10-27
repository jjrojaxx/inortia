import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreContactoComponent } from './sobre-contacto.component';

describe('SobreContactoComponent', () => {
  let component: SobreContactoComponent;
  let fixture: ComponentFixture<SobreContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
