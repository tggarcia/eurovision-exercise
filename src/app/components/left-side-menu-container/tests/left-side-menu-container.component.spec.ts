import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';

import { LeftSideMenuComponent } from '@components/left-side-menu/left-side-menu.component';
import { initialNavigationState } from "@store/navigation/navigation.reducers";
import { LeftSideMenuContainerComponent } from '../left-side-menu-container.component';

describe('LeftSideMenuContainerComponent', () => {
  let component: LeftSideMenuContainerComponent;
  let fixture: ComponentFixture<LeftSideMenuContainerComponent>;

  beforeEach(async(() => {
    const initialState = {
      navigationState: initialNavigationState
    };

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, MatIconModule, MatListModule ],
      declarations: [ LeftSideMenuComponent, LeftSideMenuContainerComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
