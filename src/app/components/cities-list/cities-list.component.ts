import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Store } from "@ngrx/store";
import { forkJoin } from 'rxjs';

import { SortFilterEnum } from '@shared/enums/sort-filter.enum';
import { CityModel } from '@shared/models/city.model';
import { CitiesService } from '@shared/services/cities.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnChanges {
  @Input()
  public cities: CityModel[];

  @Input()
  public totalCities: number;

  @Input()
  public itemsPerPage: number;

  @Input()
  public pageOpened: number;

  @Input()
  public sortFilterSelected: SortFilterEnum;

  @Output()
  public pageSizeChanged: EventEmitter<any> = new EventEmitter();

  @Output()
  public pageSelected: EventEmitter<any> = new EventEmitter();

  constructor(private citiesService: CitiesService, private readonly store: Store) { }

  ngOnChanges() {
    this.requestCities();
  }

  public onPaginatorClicked(event) {
    if (event.pageSize !== this.itemsPerPage) {
      this.pageSizeChanged.emit(event.pageSize);
    } else {
      this.pageSelected.emit(event.pageIndex);
    }
  }

  private requestCities() {
    const citiesRequest = this.citiesService.getCities(
      this.pageOpened,
      this.itemsPerPage,
      this.sortFilterSelected
    );
    
    const infoRequest = this.citiesService.getInfo();

    forkJoin([citiesRequest, infoRequest]).subscribe(results => {
      const cities = results[0] as CityModel[];
      const info = results[1] as number;
      this.cities = cities;
      this.totalCities = info['totalElements'];
    });
  }
}
