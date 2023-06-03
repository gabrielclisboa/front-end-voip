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

  //private messageService: MessageService
  constructor(private fb: FormBuilder,private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visibleChange.emit(false);
    this.authService.authenticate('ADM','123');
  }

  login() {
    if (this.loginForm.valid) {
      // Aqui você pode enviar a solicitação de login para o servidor
      // e fazer outras operações necessárias
     // this.messageService.add({severity:'success', summary:'Login realizado', detail:'Bem-vindo!'});
      this.hide();
    }
    else {
      //this.messageService.add({severity:'error', summary:'Erro no login', detail:'Por favor, preencha todos os campos.'});
    }
  }
}
