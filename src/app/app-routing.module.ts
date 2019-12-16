import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


const routes: Routes = [
  {path:'', redirectTo: '/main', pathMatch:'full'},
  {path: 'main', component: MainComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
