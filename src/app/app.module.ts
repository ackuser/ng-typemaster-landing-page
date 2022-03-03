import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { ContentBottomComponent } from './content-bottom/content-bottom.component';
import { ContentMiddleComponent } from './content-middle/content-middle.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { BtnComponent } from './btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentTopComponent,
    ContentBottomComponent,
    ContentMiddleComponent,
    CardComponent,
    CardsComponent,
    BtnComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
