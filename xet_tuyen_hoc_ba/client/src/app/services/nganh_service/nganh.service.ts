import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NganhModel } from 'src/models/nganh_model';

@Injectable({
  providedIn: 'root'
})
export class NganhService {

  constructor(private http: HttpClient) { }

  get_nganh(): Observable<NganhModel[]>{
    return this.http.get<NganhModel[]>('http://localhost:3000/nganh/thongtin').pipe();
  }
}
