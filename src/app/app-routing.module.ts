import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortComponent } from './port/port.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


// copy home
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent },
{path:'services',component:ServicesComponent},
{path:'port',component:PortComponent},
{path:'blog',component:BlogComponent},
{path:'contact',component:ContactComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
