import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoSuperComponent } from './filtrado-super.component';

describe('FiltradoSuperComponent', () => {
  let component: FiltradoSuperComponent;
  let fixture: ComponentFixture<FiltradoSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
