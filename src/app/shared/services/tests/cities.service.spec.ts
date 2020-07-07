import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

import { CitiesService } from '../cities.service';

describe('CitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    }).compileComponents();
  }));

  it('Should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });
});
