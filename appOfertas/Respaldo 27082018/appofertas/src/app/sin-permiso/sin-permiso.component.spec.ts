import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinPermisoComponent } from './sin-permiso.component';

describe('SinPermisoComponent', () => {
  let component: SinPermisoComponent;
  let fixture: ComponentFixture<SinPermisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinPermisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
