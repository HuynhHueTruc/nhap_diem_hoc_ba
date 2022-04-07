import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HocLucModel } from 'src/models/hoc_luc_model';

@Injectable({
  providedIn: 'root'
})
export class HocLucService {

  constructor(private http: HttpClient) { }

  get_hoc_luc(): Observable<HocLucModel[]>{
    return this.http.get<HocLucModel[]>('http://localhost:3000/hocluc/thongtin').pipe();
  }
}
