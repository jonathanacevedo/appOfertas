import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperpersonasComponent } from './superpersonas.component';

describe('SuperpersonasComponent', () => {
  let component: SuperpersonasComponent;
  let fixture: ComponentFixture<SuperpersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperpersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
