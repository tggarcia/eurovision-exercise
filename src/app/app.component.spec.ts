import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { LeftSideMenuContainerComponent } from './components/left-side-menu-container/left-side-menu-container.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { initialNavigationState } from "@store/navigation/navigation.reducers";
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const initialState = {
      navigationState: initialNavigationState
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        HeaderContainerComponent,
        LeftSideMenuComponent,
        LeftSideMenuContainerComponent,
        SubHeaderComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  }));

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should have as title 'eurovision-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('eurovision-exercise');
  });
});
