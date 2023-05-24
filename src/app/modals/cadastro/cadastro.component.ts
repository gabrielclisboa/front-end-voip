import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent{
  @Input()
  visible = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/^\(\d{2}\) \d \d{4}-\d{4}$/)],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  save() {
    console.log('Empresa/nome:', this.registerForm.controls['companyName'].value);
    console.log('Email:', this.registerForm.controls['email'].value);
    console.log('Telefone:', this.registerForm.controls['phone'].value);
    console.log('Senha:', this.registerForm.controls['password'].value);
    console.log('Confirmação da senha:', this.registerForm.controls['confirmPassword'].value);
    this.visibleChange.emit(false);
  }

  hide() {
    this.visibleChange.emit(false);
  }
}
