import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernegociosComponent } from './supernegocios.component';

describe('SupernegociosComponent', () => {
  let component: SupernegociosComponent;
  let fixture: ComponentFixture<SupernegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupernegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupernegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
