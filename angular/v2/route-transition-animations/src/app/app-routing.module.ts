import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
	{ path: 'first', component: FirstComponent, data: { animation: 'FirstPage' } },
	{ path: 'second', component: SecondComponent, data: { animation: 'SecondPage' } },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
