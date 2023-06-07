import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService  } from '../../service/auth.service';
import { MessageService } from 'primeng/api';
MessageService
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent  implements OnInit {
  @Input()
  visible = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService,public messageService: MessageService) {
  }


  ngOnInit() {
    this.registerForm = this.fb.group({
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
    if (this.registerForm.valid) {
      const companyName = this.registerForm.controls['companyName'].value;
      const email = this.registerForm.controls['email'].value;
      const phone = this.registerForm.controls['phone'].value;
      const password = this.registerForm.controls['password'].value;
      const confirmPassword = this.registerForm.controls['confirmPassword'].value;
  
      // Verificar se a senha e a confirmação de senha correspondem
      if (password !== confirmPassword) {
        this.messageService.add({ severity: 'error', summary: 'Erro no registro', detail: 'A senha e a confirmação de senha não correspondem.' });
        return;
      }
  
      // Chamar o serviço de registro
      this.authService.register(companyName, email, phone, password).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Registro realizado', detail: 'Registro realizado com sucesso.' });
          this.hide()
          // Faça qualquer ação necessária após o registro bem-sucedido
        },
        (error: any) => {
          this.messageService.add({ severity: 'error', summary: 'Erro no registro', detail: 'Ocorreu um erro no registro.' });
          console.error('Erro no registro:', error);
          // Faça qualquer ação necessária para tratar o erro de registro
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Formulário inválido', detail: 'Preencha todos os campos corretamente.' });
    }
  }

  hide() {
    this.visibleChange.emit(false);
  }
}
