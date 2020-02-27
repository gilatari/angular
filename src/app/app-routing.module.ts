import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AlbumsComponent} from './albums/albums.component'

const routes: Routes = [
                        {path: 'login', component: LoginComponent},
                        {path: 'albums', component: AlbumsComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
