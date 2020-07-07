import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { CitiesListContainerComponent } from './components/cities-list-container/cities-list-container.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { LeftSideMenuContainerComponent } from './components/left-side-menu-container/left-side-menu-container.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

import { appReducers } from "./store";



@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    CitiesListContainerComponent,
    FiltersComponent,
    HeaderComponent,
    HeaderContainerComponent,
    HomeComponent,
    LeftSideMenuComponent,
    LeftSideMenuContainerComponent,
    SubHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule,
    StoreModule.forRoot(appReducers, {}),
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
