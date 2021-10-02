import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ComicPanelComponent } from './comic-panel/comic-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieinfoComponent,
    MovieListComponent,
    ComicPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
