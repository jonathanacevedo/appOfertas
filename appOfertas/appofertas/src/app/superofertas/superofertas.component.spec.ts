import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperofertasComponent } from './superofertas.component';

describe('SuperofertasComponent', () => {
  let component: SuperofertasComponent;
  let fixture: ComponentFixture<SuperofertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperofertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
