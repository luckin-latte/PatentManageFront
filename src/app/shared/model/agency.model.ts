export interface AgencyModel {
   id: number;
   agencyCode: string;
   agencyName: string;
   agencyAddress: string;
   agencyPhone: string;
   agencyEmail: string;
   agentName: string; // 代理人名字
   agencyHolder: string; // 代理机构负责人名字
   agencyRemark: string;
}

// export class AgencyModel {

//   code: string = '';
//   name: string = '';
//   date: Date;
//   inventor: string = '';
//   status: string = '';
//   type: string = '';

//   constructor(values: any) {
//   }
// }