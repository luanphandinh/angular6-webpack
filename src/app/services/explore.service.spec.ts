import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ExploreService } from './explore.service';

describe('ExploreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ExploreService]
    });
  });

  it('should be created', inject([ExploreService], (service: ExploreService) => {
    expect(service).toBeTruthy();
  }));
});
