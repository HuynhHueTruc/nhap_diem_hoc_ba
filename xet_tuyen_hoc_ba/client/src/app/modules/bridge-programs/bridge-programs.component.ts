import { Component, OnInit } from '@angular/core';
import { ThiSinhModel } from 'src/models/thi_sinh_model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bridge-programs',
  templateUrl: './bridge-programs.component.html',
  styleUrls: ['./bridge-programs.component.scss'],
  providers: [DatePipe]
})
export class BridgeProgramsComponent implements OnInit {

  checkAll = false;
  checked = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  dialog_them_thi_sinh(thi_sinh: any) {
  }

  dialog_thong_tin_thi_sinh(thong_tin_thi_sinh: any, thi_sinh: any) {
  }

  dialog_dang_ky_nganh(diem_hoc_ba: any, thi_sinh: ThiSinhModel) {
  }

  dialog_ket_qua(ket_qua: any){
    this.modalService.open(ket_qua, { ariaLabelledBy: 'ket_qua_title', backdrop: 'static', keyboard: false, size: 'lg' });
  }

  // Hàm xử lý sự kiện checked tại ô checkbox tổng
  kt_all_checked() {

  }

}
