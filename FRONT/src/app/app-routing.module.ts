import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMusicaComponent } from './components/views/musica/list-musica/list-musica.component';
import { RegisterMusicaComponent } from './components/views/musica/register-musica/register-musica.component';

const routes: Routes = [
    {
        path: "",
        component: ListMusicaComponent
    },

    {
        path: "musica/list",
        component: ListMusicaComponent
    },

    {
        path: "musica/create",
        component: RegisterMusicaComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
