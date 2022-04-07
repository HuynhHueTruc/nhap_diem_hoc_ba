import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DangKyModel } from 'src/models/dang_ky_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DangKyService {

  constructor(private http: HttpClient) { }

  get_dang_ky(): Observable<DangKyModel[]>{
    return this.http.get<DangKyModel[]>('http://localhost:3000/dangky/thongtin').pipe();
  }

  luu_nganh_dang_ky(nganh_dang_ky: DangKyModel): Observable<DangKyModel[]>{
    return this.http.post<DangKyModel[]>('http://localhost:3000/nganhdangky/themmoi', nganh_dang_ky).pipe();
   }
}
