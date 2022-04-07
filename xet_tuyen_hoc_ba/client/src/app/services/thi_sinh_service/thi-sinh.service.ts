import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ThiSinhModel } from 'src/models/thi_sinh_model';
import { NganhTotNghiepModel } from 'src/models/nganh_to_nghiep_model';
import { DangKyModel } from 'src/models/dang_ky_model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ThiSinhService {

  private refreshPage = new Subject<void>();

  constructor(private http: HttpClient) { }

  getRefeshPage() {
    return this.refreshPage;
  }

  get_thi_sinh(): Observable<ThiSinhModel[]>{
    return this.http.get<ThiSinhModel[]>('http://localhost:3000/thisinh/thongtin').pipe();
  }

  luu_thi_sinh(thi_sinh: ThiSinhModel, nganh_tot_nghiep: NganhTotNghiepModel, dang_ky: DangKyModel): Observable<ThiSinhModel[]>{
    return this.http.post<ThiSinhModel[]>('http://localhost:3000/thisinh/themmoi', {thi_sinh, nganh_tot_nghiep, dang_ky}).pipe(
      tap(() => {
        this.refreshPage.next();
      })
    );
   }

   xoa_thi_sinh(_id: string): Observable<ThiSinhModel[]>{
    return this.http.delete<ThiSinhModel[]>(`${'http://localhost:3000/thisinh/xoathisinh'}/${_id}`).pipe(
      tap(() => {
      this.refreshPage.next();
    }));
   }
}
