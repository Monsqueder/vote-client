import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {WebsocketService} from "./service/websocket.service";
import {websocketFactory} from "./service/websocket.factory";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: WebsocketService,
      useFactory: websocketFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
