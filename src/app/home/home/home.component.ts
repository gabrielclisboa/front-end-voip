import { HomeService } from './../../service/home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { tap } from 'rxjs/operators';

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
  showPagamento = false;
  valorTotal = 0;
  isLogado = false;
  qtdTeste = 20;
  audioURL: string | undefined;
  idAudio!:number;

  constructor(private fb: FormBuilder, public loginService: LoginService, private HomeService: HomeService) {
    this.isLogado = this.loginService.isLoggedIn();
    this.vozes = [];

    this.form = new FormGroup({
      velocidade: new FormControl(1),
      tom: new FormControl(0),
      texto: new FormControl(),
      voz: new FormControl(),
    });
  }

  login(event: any) {
    this.showCadastro = event;
  }

  ngOnInit() {
    this.loginService.loginStatusChanged.subscribe((status: boolean) => {
      this.isLogado = status;
    });

    this.form.get('texto')?.valueChanges.subscribe((value: string) => {
      const caracteres = value.length;
      this.valorTotal = calcularValorTotal(caracteres);
    });

    this.valorTotal = calcularValorTotal(0);

    this.HomeService.loadNameVoices().subscribe((data: any) => {
      const voices = data.voices;
      voices.forEach((value: string) => {
        this.vozes.push({ value: value, name: value });
      });
    });
    
  }

  onSubmit() {
    if (this.form.valid) {
      this.qtdTeste = this.qtdTeste - 1;
      console.log('Formulário enviado com sucesso!');
      
      const user = this.loginService.getLoggedInUsername();
      const text = this.form.controls['texto'].value;
      const voice_name = this.form.controls['voz'].value.value;
      const voice_speed= this.form.controls['velocidade'].value;  
      const pitch= this.form.controls['tom'].value;  
      this.HomeService.generateAudio(user, text, voice_name,voice_speed,pitch).pipe(
        tap((result: any) => {
          this.idAudio=result.id_audio;
          this.fetchAudio(result.filename)
        })
      ).subscribe({
        error: (error: any) => {
          // Handle the registration error
          console.error('Registration failed:', error);
          // Perform error handling or display an error message to the user
        }
      });
    } else {    
      console.log('Formulário inválido!');
      // Here you can display an error message to the user or take any appropriate action.
    }
  }


  fetchAudio(nameAudio : string) {
    const filename = nameAudio;

    this.HomeService.getAudio(filename).subscribe(
      (audioBlob: Blob) => {
        this.audioURL = URL.createObjectURL(audioBlob);
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }
  
}

function calcularValorTotal(caracteres: number): number {
  // Aqui você pode definir a lógica para calcular o valor total com base na quantidade de caracteres.
  // Por exemplo, supondo que cada caractere tenha um valor de R$0,10:
  const valorPorCaractere = 0.10;
  return caracteres * valorPorCaractere;
}
