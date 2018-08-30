import { TestBed, inject } from '@angular/core/testing';

import { EliminarService } from './eliminar.service';

describe('EliminarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EliminarService]
    });
  });

  it('should be created', inject([EliminarService], (service: EliminarService) => {
    expect(service).toBeTruthy();
  }));
});
