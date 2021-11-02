import { TestBed } from '@angular/core/testing';

import { ServicioBDService } from './servicio-bd.service';

describe('ServicioBDService', () => {
  let service: ServicioBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
