import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatGridListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

import { FiltersComponent } from '@components/filters/filters.component';
import { CitiesListComponent } from '@components/cities-list/cities-list.component';
import { initialNavigationState } from "@store/navigation/navigation.reducers";
import { CitiesListContainerComponent } from '../cities-list-container.component';

describe('CitiesListContainerComponent', () => {
  let component: CitiesListContainerComponent;
  let fixture: ComponentFixture<CitiesListContainerComponent>;

  beforeEach(async(() => {
    const initialState = {
      navigationState: initialNavigationState
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatDividerModule,
        MatFormFieldModule,
        MatGridListModule,
        MatPaginatorModule,
        MatSelectModule
      ],
      declarations: [ CitiesListComponent, CitiesListContainerComponent, FiltersComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
