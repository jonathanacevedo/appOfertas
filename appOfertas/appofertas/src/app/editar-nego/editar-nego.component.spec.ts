import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNegoComponent } from './editar-nego.component';

describe('EditarNegoComponent', () => {
  let component: EditarNegoComponent;
  let fixture: ComponentFixture<EditarNegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
