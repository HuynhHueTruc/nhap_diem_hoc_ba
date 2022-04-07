import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MonModel } from 'src/models/mon_model';

@Injectable({
  providedIn: 'root'
})
export class MonService {

  constructor(private http: HttpClient) { }

  get_mon(): Observable<MonModel[]>{
    return this.http.get<MonModel[]>('http://localhost:3000/mon/thongtin').pipe();
  }
}
