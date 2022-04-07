import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NganhXetTuyenModel } from 'src/models/nganh_xet_tuyen_model';

@Injectable({
  providedIn: 'root'
})
export class NganhXetTuyenService {

  constructor(private http: HttpClient) { }

  get_nganh_xet_tuyen(): Observable<NganhXetTuyenModel[]>{
    return this.http.get<NganhXetTuyenModel[]>('http://localhost:3000/nganhxettuyen/thongtin').pipe();
  }
}
