import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LopModel } from 'src/models/lop_model';

@Injectable({
  providedIn: 'root'
})
export class LopService {

  constructor(private http: HttpClient) { }

  get_lop(): Observable<LopModel[]>{
    return this.http.get<LopModel[]>('http://localhost:3000/lop/thongtin').pipe();
  }
}
