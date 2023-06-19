import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Response } from '../models/login.models';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { AudioDTO } from '../meusaudios/models/meusaudios.models';
@Injectable({
  providedIn: 'root'
})
export class MeusAudiosService  {

  constructor(private http: HttpClient) { }
  
  searchAudios(userId: string): Observable<AudioDTO[]> {
    const url = 'http://localhost:5000/api/search_audios';
    const params = new HttpParams().set('id_user', userId);
    return this.http.get<AudioDTO[]>(url, { params });
  }

}

