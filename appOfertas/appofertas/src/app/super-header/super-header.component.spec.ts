import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeaderComponent } from './super-header.component';

describe('SuperHeaderComponent', () => {
  let component: SuperHeaderComponent;
  let fixture: ComponentFixture<SuperHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
