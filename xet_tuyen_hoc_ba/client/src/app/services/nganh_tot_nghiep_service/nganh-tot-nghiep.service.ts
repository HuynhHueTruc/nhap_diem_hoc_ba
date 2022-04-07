import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NganhTotNghiepModel } from 'src/models/nganh_to_nghiep_model';

@Injectable({
  providedIn: 'root'
})
export class NganhTotNghiepService {

  constructor(private http: HttpClient) { }

  get_nganh_tot_nghiep(): Observable<NganhTotNghiepModel[]>{
    return this.http.get<NganhTotNghiepModel[]>('http://localhost:3000/nganhtotnghiep/thongtin').pipe();
  }

  luu_nganh_tot_nghiep(nganh_tot_nghiep: NganhTotNghiepModel): Observable<NganhTotNghiepModel[]>{
    return this.http.post<NganhTotNghiepModel[]>('http://localhost:3000/nganhtotnghiep/themmoi', nganh_tot_nghiep).pipe();
   }
}
