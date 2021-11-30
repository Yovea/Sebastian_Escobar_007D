import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datos } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  constructor(private http: HttpClient) { }

  gatosAdop()
  {
    return this.http.get<datos>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c994f4132ff5425aa8f585858bb6fa74')
  }
  
}
