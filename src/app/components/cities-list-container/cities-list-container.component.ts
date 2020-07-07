import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import { SortFilterEnum } from '@shared/enums/sort-filter.enum';
import { CityModel } from '@shared/models/city.model';
import { pageSelected, pageSizeChanged, sortFilterSelected } from "@store/navigation/navigation.actions";
import {
  getItemsPerPage,
  getPageOpened,
  getSortFilterSelected
} from "@store/navigation/navigation.selectors";

@Component({
  selector: 'app-cities-list-container',
  templateUrl: './cities-list-container.component.html'
})
export class CitiesListContainerComponent implements OnInit {
  public itemsPerPage$: Observable<number>;
  public pageOpened$: Observable<number>;
  public sortFilterSelected$: Observable<SortFilterEnum>;

  public cities: CityModel[];
  public totalCities: number;
  public itemsPerPage: number;
  
  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.itemsPerPage$ = this.store.pipe(select(getItemsPerPage));
    this.pageOpened$ = this.store.pipe(select(getPageOpened));
    this.sortFilterSelected$ = this.store.pipe(select(getSortFilterSelected));
  }

  public onPageSizeChanged(pageSize) {
    this.store.dispatch(pageSizeChanged({payload: pageSize}));
  }

  public onPageSelected(pageIndex) {
    this.store.dispatch(pageSelected({payload: pageIndex}));
  }

  public onSortFilterChanged(sortFilter) {
    console.log(sortFilter);
    this.store.dispatch(sortFilterSelected({payload: sortFilter}));
  }
}
