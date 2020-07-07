import { Action, createReducer, on } from '@ngrx/store';
import { SortFilterEnum } from '@shared/enums/sort-filter.enum';
import * as NavigationActions from './navigation.actions';

export interface NavigationState {
  sideMenuOpened: boolean,
  itemsPerPage: number,
  pageOpened: number,
  sortFilterSelected: SortFilterEnum
}

export const initialNavigationState: NavigationState = {
  sideMenuOpened: false,
  itemsPerPage: 5,
  pageOpened: 0,
  sortFilterSelected: SortFilterEnum.NAME
};

const reducers = createReducer(
  initialNavigationState,
  on(NavigationActions.sideMenuToggled, (state, { payload }) => ({ ...state, sideMenuOpened: payload })),
  on(NavigationActions.pageSelected, (state, { payload }) => ({ ...state, pageOpened: payload })),
  on(NavigationActions.pageSizeChanged, (state, { payload }) => ({ 
    ...state,
    itemsPerPage: payload,
    pageOpened: 0
  })),
  on(NavigationActions.sortFilterSelected, (state, { payload }) => ({ 
    ...state,
    sortFilterSelected: payload
  }))
);

export function navigationReducer(state: NavigationState | undefined, action: Action) {
  return reducers(state, action);
}
