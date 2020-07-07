import { createAction, props } from '@ngrx/store';
import { SortFilterEnum } from '@shared/enums/sort-filter.enum';

export const sideMenuToggled = createAction(
  '[Navigation] Side menu toggled',
  props<{ payload: boolean }>()
);

export const pageSizeChanged = createAction(
  '[Navigation] Page size changed',
  props<{ payload: number }>()
);

export const pageSelected = createAction(
  '[Navigation] Page selected',
  props<{ payload: number }>()
);

export const sortFilterSelected = createAction(
  '[Navigation] Sort filter selected',
  props<{ payload: SortFilterEnum }>()
);