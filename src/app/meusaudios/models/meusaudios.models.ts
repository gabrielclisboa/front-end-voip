interface AudioDTO{
    id_audio: number;
    creation_date: Date;
    arq_name: string;
    id_user:number;
}

interface Audio{
  nome: string;
  dataCompra: Date;
  formato: string;
  url:string;
  download: string; // Adicione a propriedade 'download'
}

export{
  AudioDTO,
  Audio
}

