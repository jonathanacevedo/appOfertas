import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfotoComponent } from './verfoto.component';

describe('VerfotoComponent', () => {
  let component: VerfotoComponent;
  let fixture: ComponentFixture<VerfotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
