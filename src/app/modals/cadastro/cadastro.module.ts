import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule  } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { CadastroComponent } from './cadastro.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule
  ],
  exports: [CadastroComponent]
})
export class CadastroModule { }
