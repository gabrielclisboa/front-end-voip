import { HomeService } from './../../service/home.service';
import { LoginService } from './../../service/login.service';
import { MeusAudiosService } from './../../service/meusaudios.service';
import { Component, OnInit } from '@angular/core';
import { Audio,AudioDTO } from '../../meusaudios/models/meusaudios.models'
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-meusaudios',
  templateUrl: './meusaudios.component.html',
  styleUrls: ['./meusaudios.component.scss']
})
export class MeusaudiosComponent  implements OnInit {  

  constructor(private localeService: BsLocaleService,private meusAudiosService:MeusAudiosService,private loginService:LoginService,private HomeService: HomeService) {
    defineLocale('pt-br', ptBrLocale);
    this.localeService.use('pt-br');
  }
  audios: Audio[] = [];
  
  ngOnInit() {
    this.getAudios();
  }

  getAudios() {
    const userId = this.loginService.getLoggedInUsername();
    this.meusAudiosService.searchAudios(userId).subscribe(
      async (audios: AudioDTO[]) => {
        if (Array.isArray(audios)) {
          const audioPromises = audios.map(async (audio: AudioDTO) => {
            const url = await this.fetchAudio(audio.arq_name);
            const item: Audio = {
              nome: audio.arq_name,
              dataCompra: audio.creation_date,
              formato: ".wav",
              url: url,
              download: url // Defina a propriedade 'download' como a URL
            };
            return item;
          });
  
          try {
            const audioItems = await Promise.all(audioPromises);
            this.audios.push(...audioItems);
          } catch (error) {
            console.error('Ocorreu um erro ao obter os áudios:', error);
          }
        }
      },
      (error: any) => {
        console.error('Ocorreu um erro ao obter os áudios:', error);
      }
    );
  }
  
  fetchAudio(nameAudio: string): Promise<string> {
    const filename = nameAudio;
    let nome = ""; // Inicializa a variável 'nome' com um valor padrão vazio
  
    return new Promise<string>((resolve, reject) => {
      this.HomeService.getAudio(filename).subscribe(
        (audioBlob: Blob) => {  
          nome = URL.createObjectURL(audioBlob);
          resolve(nome); // Resolve a Promise com o valor 'nome'
        },
        (error: any) => {
          console.error('Ocorreu um erro:', error);
          reject(error); // Rejeita a Promise com o erro
        }
      );
    });
  }
  

}
