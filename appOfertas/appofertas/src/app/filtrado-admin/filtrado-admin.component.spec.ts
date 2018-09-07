import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoAdminComponent } from './filtrado-admin.component';

describe('FiltradoAdminComponent', () => {
  let component: FiltradoAdminComponent;
  let fixture: ComponentFixture<FiltradoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
