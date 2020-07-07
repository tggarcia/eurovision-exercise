import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SortFilterEnum } from '@shared/enums/sort-filter.enum';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input()
  public sortFilterSelected: SortFilterEnum;

  @Output()
  public sortFilterChanged: EventEmitter<any> = new EventEmitter();

  public sortFilterEnum = SortFilterEnum;

  public onSelectionChanges(event) {
    this.sortFilterChanged.emit(event.value);
  }
}
