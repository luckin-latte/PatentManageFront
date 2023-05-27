export interface BillModel {
  id: number;
  agencyId: number;
  proposalId: number;
  billCode: string;
  payStatus: string;
  dueAmount: string;
  actualPayAmount: string;
  payDate: Date;
  billUrl: string;
  remark: string;
}