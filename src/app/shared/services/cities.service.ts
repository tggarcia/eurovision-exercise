import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { BASE_URL, CITIES_ENDPOINT, INFO_ENDPOINT } from '@shared/constants/api.constants';
import { SortFilterEnum } from '@shared/enums/sort-filter.enum';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  public getCities = (page: number, limit: number, sortBy: SortFilterEnum) =>  {
    let url = BASE_URL + CITIES_ENDPOINT;
    if (page !== undefined) {
      url += "?_page=" + (page + 1);
      
      if (limit) {
        url += "&_limit=" + limit;
      }

      if (sortBy) {
        url += "&_sort=" + sortBy + "&_order=asc";
      }
    }
    
    console.log(url);
    return this.http.get(url);
  };

  public getInfo = () =>  {
    let url = BASE_URL + INFO_ENDPOINT;
    return this.http.get(url);
  };
}
