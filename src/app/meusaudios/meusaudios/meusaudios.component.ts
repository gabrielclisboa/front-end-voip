import { Component } from '@angular/core';
import { Audio } from '../../meusaudios/models/meusaudios.models'
import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-meusaudios',
  templateUrl: './meusaudios.component.html',
  styleUrls: ['./meusaudios.component.scss']
})
export class MeusaudiosComponent {

  constructor(private localeService: BsLocaleService) {
    defineLocale('pt-br', ptBrLocale);
    this.localeService.use('pt-br');
  }


  audios: Audio[] = [
    {
      nome: 'Áudio 1',
      formato: 'mp3',
      dataCompra: new Date(),
      url: 'https://example.com/audio1.mp3',
      downloadUrl: 'https://example.com/audio1.mp3'
    },
    {
      nome: 'Áudio 2',
      formato: 'wav',
      dataCompra: new Date(),
      url: 'https://example.com/audio2.wav',
      downloadUrl: 'https://example.com/audio2.wav'
    },
    // Adicione mais objetos de áudio conforme necessário
  ];
}
