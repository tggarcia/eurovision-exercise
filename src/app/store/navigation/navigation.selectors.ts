import { NavigationState } from "./navigation.reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getNavigationState = createFeatureSelector<NavigationState>(
  'navigationState'
);

export const getIsSideMenuOpened = createSelector(
  getNavigationState,
  (navigationState: NavigationState) => navigationState.sideMenuOpened
);

export const getItemsPerPage = createSelector(
  getNavigationState,
  (navigationState: NavigationState) => navigationState.itemsPerPage
);

export const getPageOpened = createSelector(
  getNavigationState,
  (navigationState: NavigationState) => navigationState.pageOpened
);

export const getSortFilterSelected = createSelector(
  getNavigationState,
  (navigationState: NavigationState) => navigationState.sortFilterSelected
);
