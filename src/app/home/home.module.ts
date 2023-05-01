import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { CadastroModule } from '../modals/cadastro/cadastro.module';
import { LoginModule } from '../modals/login/login.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    SliderModule,
    CadastroModule,
    LoginModule
  ]
})
export class HomeModule { }
