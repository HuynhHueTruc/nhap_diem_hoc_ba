import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiaChiModel } from 'src/models/dia_chi_model/dia_chi_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaChiService {

  constructor(private httpClient: HttpClient) { }

  get_dia_chi(): Observable<DiaChiModel[]>{
    return this.httpClient.get<DiaChiModel[]>('../../assets/diachi.js').pipe();
  }
}
