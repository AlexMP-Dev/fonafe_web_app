import { Routes } from '@angular/router';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { NotfoundpageComponent } from './Pages/notfoundpage/notfoundpage.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomepageComponent},
  {path:'login', component: LoginpageComponent},
  {path: '**', component: NotfoundpageComponent}
];
