import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';

import { HeaderComponent } from '@components/header/header.component';
import { initialNavigationState } from "@store/navigation/navigation.reducers";
import { HeaderContainerComponent } from '../header-container.component';

describe('HeaderContainerComponent', () => {
  let component: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;

  beforeEach(async(() => {
    const initialState = {
      navigationState: initialNavigationState
    };

    TestBed.configureTestingModule({
      imports: [ MatIconModule, MatToolbarModule ],
      declarations: [ HeaderContainerComponent, HeaderComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });
});
