import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule, MatGridListModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

import { SortFilterEnum } from '@shared/enums/sort-filter.enum';
import { CitiesListComponent } from '../cities-list.component';

describe('CitiesListComponent', () => {
  let component: CitiesListComponent;
  let fixture: ComponentFixture<CitiesListComponent>;

  beforeEach(async(() => {
    const initialState = {
      sideMenuOpened: false,
      itemsPerPage: 5,
      pageOpened: 1,
      sortFilterSelected: SortFilterEnum.NAME
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatDividerModule,
        MatGridListModule,
        MatPaginatorModule
      ],
      declarations: [ CitiesListComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
