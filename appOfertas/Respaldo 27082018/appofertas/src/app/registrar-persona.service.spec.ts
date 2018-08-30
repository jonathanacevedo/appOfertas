import { TestBed, inject } from '@angular/core/testing';

import { RegistrarPersonaService } from './registrar-persona.service';

describe('RegistrarPersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrarPersonaService]
    });
  });

  it('should be created', inject([RegistrarPersonaService], (service: RegistrarPersonaService) => {
    expect(service).toBeTruthy();
  }));
});
