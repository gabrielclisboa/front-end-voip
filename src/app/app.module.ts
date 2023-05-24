import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TutorialModule } from './tutorial/tutorial.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    NgbModule,
    TutorialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
