import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  form: FormGroup; 
  idioma: any;
  vozes: any;
  showCadastro = false;
  showLogin = false;

  constructor(private fb: FormBuilder) {
    this.idioma = [{value:'pt-BR',name:'pt-BR'}];
    this.vozes = [{value:'francisca', name:'Francisca(neural)'}];

    this.form = new FormGroup({
      velocidade: new FormControl(1), 
      tom: new FormControl(1), 
      texto: new FormControl(), 
      idioma: new FormControl(), 
      voz: new FormControl(), 
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado com sucesso!');
      // Aqui você pode enviar o formulário para um servidor ou fazer outra ação com ele.
    } else {
      console.log('Formulário inválido!');
      // Aqui você pode exibir uma mensagem de erro para o usuário ou fazer outra ação apropriada.
    }
  }
}
