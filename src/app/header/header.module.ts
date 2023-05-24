import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MenuModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    BrowserModule,
    MenubarModule,
    SidebarModule,
    
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
