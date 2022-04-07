import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToHopModel } from 'src/models/to_hop_model';

@Injectable({
  providedIn: 'root'
})
export class ToHopService {

  constructor(private httpClient: HttpClient) { }

  get_to_hop(): Observable<ToHopModel[]>{
    return this.httpClient.get<ToHopModel[]>('../../assets/tohop.js').pipe();
  }
}
