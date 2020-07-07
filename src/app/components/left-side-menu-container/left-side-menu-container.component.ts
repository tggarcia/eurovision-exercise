import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getIsSideMenuOpened } from "@store/navigation/navigation.selectors";

@Component({
  selector: 'app-left-side-menu-container',
  templateUrl: './left-side-menu-container.component.html'
})
export class LeftSideMenuContainerComponent implements OnInit {
  public isSideMenuOpened$: Observable<boolean>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.isSideMenuOpened$ = this.store.pipe(select(getIsSideMenuOpened));
  }
}
