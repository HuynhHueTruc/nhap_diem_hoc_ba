export class NganhXetTuyenModel{
  _id!: string;
  chuyen_nganh!: [{
    _id: string;
    ten_chuyen_nganh: string;
  }];
  ten_nganh!: string;
  to_hop_xet_tuyen!: Array<String>;
}
