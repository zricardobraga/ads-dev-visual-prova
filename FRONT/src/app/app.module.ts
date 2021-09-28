import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterMusicaComponent } from './components/views/musica/register-musica/register-musica.component';
import { ListMusicaComponent } from './components/views/musica/list-musica/list-musica.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMusicaComponent,
    ListMusicaComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
