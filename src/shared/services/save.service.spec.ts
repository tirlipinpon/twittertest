/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaveService } from './save.service';

describe('SaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveService]
    });
  });

  it('should ...', inject([SaveService], (service: SaveService) => {
    expect(service).toBeTruthy();
  }));
});
