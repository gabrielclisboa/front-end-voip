import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/login.models';
import { Observable, catchError, map, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService  {

  constructor(private http: HttpClient) { }
  
  generateAudio(user: string, text: string, voice_name: string,voice_speed:number, pitch:number): Observable<string> {
    const url = 'http://localhost:5000/api/text_to_speech'; // Replace with the actual registration URL
    
    const body = {
      user: user,
      text: text,
      voice_name: voice_name,
      voice_speed: voice_speed,
      pitch:pitch
    };
    
    return this.http.post<any>(url, body).pipe(
      map((response: any) => {
        if (response.success) {
          const result = response.result;
          // Perform further actions with the audio file as needed
          return result;
        } else {
          console.error('Registration failed:', response.error);
          throw new Error('Registration failed');
        }
      }),
      catchError((error: any) => {
        // Handle request errors
        console.error('An error occurred during the request:', error);
        return of<string>(''); // Return an empty string or handle the error as needed
      })
    );
  }

  getAudio(filename: string): Observable<Blob> {
    const url = `http://localhost:5000/api/get_audio?filename=${filename}`;

    return this.http.get(url, { responseType: 'blob' }).pipe(
      catchError((error) => {
        console.error('Ocorreu um erro:', error);
        return throwError(() => new Error('Falha ao obter o arquivo de áudio'));
      })
    );
  }

  loadNameVoices(): Observable<string[]> {
    const url = `http://localhost:5000/api/load_voice_names`;
  
    return this.http.get<string[]>(url).pipe(
      catchError((error) => {
        console.error('Ocorreu um erro:', error);
        return throwError(() => new Error('Falha ao obter o arquivo de áudio'));
      })
    );
  }

}

