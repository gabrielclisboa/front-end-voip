import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService  } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  @Input()
  visible = false;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder,private authService: AuthService,public messageService: MessageService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  hide() {
    this.visibleChange.emit(false);
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email'].value;
      const password = this.loginForm.controls['password'].value;

      this.authService.authenticate(email, password).subscribe((isValid: boolean) => {
        if (isValid) {
          // Login válido
          this.messageService.add({severity: 'success', summary: 'Login realizado', detail: 'Bem-vindo!'});
          this.hide();
        } else {
          // Login inválido
          this.messageService.add({severity: 'error', summary: 'Erro no login', detail: 'Credenciais inválidas.'});
        }
      });
    } else {
      // Campos inválidos
      this.messageService.add({severity: 'error', summary: 'Erro no login', detail: 'Por favor, preencha todos os campos.'});
    }
  }
}
