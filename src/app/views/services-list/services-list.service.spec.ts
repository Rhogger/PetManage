/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicesListService } from './services-list.service';

describe('Service: ServicesList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesListService]
    });
  });

  it('should ...', inject([ServicesListService], (service: ServicesListService) => {
    expect(service).toBeTruthy();
  }));
});
