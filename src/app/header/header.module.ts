import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MenuModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
