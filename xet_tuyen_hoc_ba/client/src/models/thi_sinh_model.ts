export class ThiSinhModel {
  _id!: string;
  ho_ten!: string;
  ngay_sinh!: Date;
  cmnd_cccd!: string;
  gioi_tinh!: number;
  dia_chi!: [{
    xa_phuong: string;
    huyen_quan: string;
    tinh_thanhpho: string
  }];
  dan_toc!: string;
  noi_sinh!: string;
  dien_thoai!: string;
  email!: string;
  so_ho_so!: string;
  ngay_tao!: Date;
  ngay_cap_nhat!: Date;
}
