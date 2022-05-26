import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';


import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './service/user.service';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { GraphsComponent } from './graphs/graphs.component';
import { HomeeComponent } from './homee/homee.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ParentCComponent } from './parent-c/parent-c.component';
import { BevaregesComponent } from './bevareges/bevareges.component';
import { YoutubeComponent } from './youtube/youtube.component'
import { NgChartsModule } from 'ng2-charts';
import { SortComponent } from './sort/sort.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    RegistrationComponent,
    GraphsComponent,
    HomeeComponent,
    UserListComponent,
    AddUserComponent,
    NavBarComponent,
    UserComponent,
    UsersComponent,
    ParentCComponent,
    BevaregesComponent,
    YoutubeComponent,
    SortComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    PlotlyModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
