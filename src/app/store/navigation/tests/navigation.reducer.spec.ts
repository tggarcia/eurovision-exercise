import { SortFilterEnum } from '@shared/enums/sort-filter.enum';
import { pageSelected, pageSizeChanged, sideMenuToggled, sortFilterSelected } from '../navigation.actions';
import { initialNavigationState, navigationReducer } from '../navigation.reducers';

describe('Reducer: Navigation', () => {
  it('Should change the page selected', () => {
    const state = navigationReducer(
      initialNavigationState,
      pageSelected({ payload: 2 })
    );

    expect(state.pageOpened).toEqual(2);
  });
  
  it('Should change the size of the page', () => {
    const state = navigationReducer(
      initialNavigationState,
      pageSizeChanged({ payload: 25 })
    );

    expect(state.itemsPerPage).toBe(25);
  });
  
  it('Should change the value for side menu', () => {
    const state = navigationReducer(
      initialNavigationState,
      sideMenuToggled({ payload: true })
    );

    expect(state.sideMenuOpened).toBe(true);
  });

  it('Should change the value for the sortFilter', () => {
    const state = navigationReducer(
      initialNavigationState,
      sortFilterSelected({ payload: SortFilterEnum.ID })
    );

    expect(state.sortFilterSelected).toBe(SortFilterEnum.ID);
  });
});
