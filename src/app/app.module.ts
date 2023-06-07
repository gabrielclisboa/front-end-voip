import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TutorialModule } from './tutorial/tutorial.module';
import { LoginModule } from './modals/login/login.module';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PagamentoModule } from './modals/pagamento/pagamento.module';

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
    LoginModule,
    TutorialModule,
    HttpClientModule,
    ToastModule,
    PagamentoModule
  ],
  providers: [AuthService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
