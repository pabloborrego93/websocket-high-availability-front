import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { StompService } from 'ng2-stomp-service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService, StompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
