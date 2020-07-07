import { ActionReducerMap } from "@ngrx/store";
import { NavigationState, navigationReducer } from "./navigation/navigation.reducers";

export interface AppState {
  navigationState: NavigationState;
}

export const appReducers: ActionReducerMap<AppState> = {
  navigationState: navigationReducer
};
