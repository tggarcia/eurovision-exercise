import { SortFilterEnum } from '@shared/enums/sort-filter.enum';
import * as selectors from '../navigation.selectors';

const appState = {
  navigationState: {
    sideMenuOpened: true,
    itemsPerPage: 10,
    pageOpened: 1,
    sortFilterSelected: SortFilterEnum.ID
  }
} as any;

describe('Selector: navigation', () => {
  it('getIsSideMenuOpened: should select if side menu is opened', () => {
    const result = selectors.getIsSideMenuOpened(appState);
    expect(result).toEqual(true);
  });

  it('getItemsPerPage: should select items per page', () => {
    const result = selectors.getItemsPerPage(appState);
    expect(result).toEqual(10);
  });

  it('getPageOpened: should select the number of the opened page', () => {
    const result = selectors.getPageOpened(appState);
    expect(result).toEqual(1);
  });

  it('getSortFilterSelected: should select the sort filter selected', () => {
    const result = selectors.getSortFilterSelected(appState);
    expect(result).toEqual(SortFilterEnum.ID);
  });
});
