import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeeComponent } from './homee/homee.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './auth.guard';
import { BevaregesComponent } from './bevareges/bevareges.component';
import { ParentCComponent } from './parent-c/parent-c.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SortComponent } from './sort/sort.component';


const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/nav-bar"},
  {path: 'home', component:HomeComponent},
  {path: "header", component:HeaderComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"login",component:LoginComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"graphs",component:GraphsComponent},
  { path: 'home', component: HomeeComponent },
  { path: 'user', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent },
  {path: 'users', component:UsersComponent},
  {path:'bevareges', component:BevaregesComponent},
  {path:'parent-c',component:ParentCComponent},
  {path:'youtube',component:YoutubeComponent},
  {path: 'sort',component:SortComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
