import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DiemModel } from 'src/models/diem_model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiemService {

  private refreshPage = new Subject<void>();

  constructor(private http: HttpClient) { }

  getRefeshPage() {
    return this.refreshPage;
  }

  get_diem(): Observable<DiemModel[]> {
    return this.http.get<DiemModel[]>('http://localhost:3000/diem/thongtin').pipe();
  }

  cap_nhat_diem(_id_thi_sinh: any ,diem: any, tab_title: any, diem_tot_nghiep: any ,nganh_xet_tuyen: any, chuyen_nganh: any): Observable<DiemModel[]> {
    return this.http.put<DiemModel[]>(`${'http://localhost:3000/diem/capnhat'}/${_id_thi_sinh}`, { diem, tab_title, diem_tot_nghiep, nganh_xet_tuyen, chuyen_nganh }).pipe(
      tap(() => {
      this.refreshPage.next();
    }));
  }
}
