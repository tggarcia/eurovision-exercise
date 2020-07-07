import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { sideMenuToggled } from "@store/navigation/navigation.actions";
import { getIsSideMenuOpened } from "@store/navigation/navigation.selectors";

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html'
})
export class HeaderContainerComponent implements OnInit {
  public isSideMenuOpened$: Observable<boolean>;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.isSideMenuOpened$ = this.store.pipe(select(getIsSideMenuOpened));
  }

  public onMenuButtonClicked(menuOpened: boolean): void {
    this.store.dispatch(sideMenuToggled({payload: menuOpened}));
  }
}
