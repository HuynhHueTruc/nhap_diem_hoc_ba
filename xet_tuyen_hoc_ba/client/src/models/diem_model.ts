export class DiemModel{
  _id!: string;
  _id_thi_sinh!: string;
  diem_tot_nghiep!: Number;
  diem_so!:[{
    toan: Number,
    vat_li: Number,
    hoa_hoc: Number,
    sinh_hoc: Number,
    ngu_van: Number,
    lich_su: Number,
    dia_li: Number,
    tieng_anh: Number,
    tieng_phap: Number,
    gdcd: Number,
    tdtt: Number,
    _id_hoc_luc: string
}];
}
