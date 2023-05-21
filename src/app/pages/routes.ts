import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'indexProposal',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/index-proposal/index-proposal.module').then(m => m.IndexProposalModule)
  },
  {
    path: 'indexApartment',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/index-apartment/index-apartment.module').then(m => m.IndexApartmentModule)
  },
  {
    path: 'indexAdministrator',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/index-administrator/index-administrator.module').then(m => m.IndexAdministratorModule)
  },
  {
    path: 'newProposal',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/new-proposal/new-proposal.module').then(m => m.NewProposalModule)
  },
  {
    path: 'myProposal',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/my-proposal/my-proposal.module').then(m => m.MyProposalModule)
  },
  {
    path: 'participatedProposal',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/participated-proposal/participated-proposal.module').then(m => m.ParticipatedProposalModule)
  },
  {
    path: 'proposalReview',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/proposal-review/proposal-review.module').then(m => m.ProposalReviewModule)
  },
  {
    path: 'departmentProposal',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/department-proposal/department-proposal.module').then(m => m.DepartmentProposalModule)
  },
  {
    path: 'newProperty',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/new-property/new-property.module').then(m => m.NewPropertyModule)
  },
  // {
  //   path: 'myPatentAdd',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/my-patent-add/my-patent-add.module').then(m => m.MyPatentAddModule)
  // },
  // {
  //   path: 'mySoftwareAdd',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/my-software-add/my-software-add.module').then(m => m.MySoftwareAddModule)
  // },
  // {
  //   path: 'myTrademarkadd',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/my-trademark-add/my-trademark-add.module').then(m => m.MyTrademarkAddModule)
  // },
  {
    path: 'myPatent',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/my-patent/my-patent.module').then(m => m.MyPatentModule)
  },
  {
    path: 'mySoftware',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/my-software/my-software.module').then(m => m.MySoftwareModule)
  },
  {
    path: 'myTrademark',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/my-trademark/my-trademark.module').then(m => m.MyTrademarkModule)
  },
  {
    path: 'departmentPatent',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/department-patent/department-patent.module').then(m => m.DepartmentPatentModule)
  },
  {
    path: 'departmentSoftware',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/department-software/department-software.module').then(m => m.DepartmentSoftwareModule)
  },
  {
    path: 'departmentTrademark',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/department-trademark/department-trademark.module').then(m => m.DepartmentTrademarkModule)
  },
  {
    path: 'proposalFiles',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/proposal-files/proposal-files.module').then(m => m.ProposalFilesModule)
  },
  {
    path: 'patentReceiveFile',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/patent-receive-file/patent-receive-file.module').then(m => m.PatentReceiveFileModule)
  },
  {
    path: 'patentPostFile',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/patent-post-file/patent-post-file.module').then(m => m.PatentPostFileModule)
  },
  {
    path: 'softwareReceiveFile',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/software-receive-file/software-receive-file.module').then(m => m.SoftwareReceiveFileModule)
  },
  {
    path: 'softwarePostFile',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/software-post-file/software-post-file.module').then(m => m.SoftwarePostFileModule)
  },
  {
    path: 'trademarkReceiveFile',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/trademark-receive-file/trademark-receive-file.module').then(m => m.TrademarkReceiveFileModule)
  },
  {
    path: 'trademarkPostFile',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/trademark-post-file/trademark-post-file.module').then(m => m.TrademarkPostFileModule)
  },
  {
    path: 'patentOfficialFee',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/patent-official-fee/patent-official-fee.module').then(m => m.PatentOfficialFeeModule)
  },
  {
    path: 'patentAnnualFee',
    pathMatch: 'prefix',
    loadChildren: () => import('./patent-annual-fee/patent-annual-fee.module').then(m => m.PatentAnnualFeeModule)
  },
  {
    path: 'patentBonus',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/patent-bonus/patent-bonus.module').then(m => m.PatentBonusModule)
  },
  {
    path: 'trademarkOfficialFee',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/trademark-official-fee/trademark-official-fee.module').then(m => m.TrademarkOfficialFeeModule)
  },
  {
    path: 'trademarkBonus',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/trademark-bonus/trademark-bonus.module').then(m => m.TrademarkBonusModule)
  },
  {
    path: 'softwareOfficialFee',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/software-official-fee/software-official-fee.module').then(m => m.SoftwareOfficialFeeModule)
  },
  {
    path: 'softwareBonus',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/software-bonus/software-bonus.module').then(m => m.SoftwareBonusModule)
  },
  {
    path: 'bill',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/bill/bill.module').then(m => m.BillModule)
  },
  {
    path: 'agency',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/agency/agency.module').then(m => m.AgencyModule)
  },
  {
    path: 'userManagement',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'roleManagement',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/role-management/role-management.module').then(m => m.RoleManagementModule)
  },
  {
    path: 'proposalStatistics',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/proposal-statistics/proposal-statistics.module').then(m => m.ProposalStatisticsModule)
  },
  {
    path: 'propertyStatistics',
    pathMatch: 'prefix',
    loadChildren: () => import('../pages/property-statistics/property-statistics.module').then(m =>m.PropertyStatisticsModule)
  }
  // {
  //   path: 'patentStatistics',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/patent-statistics/patent-statistics.module').then(m => m.PatentStatisticsModule)
  // },
  // {
  //   path: 'softwareStatistics',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/software-statistics/software-statistics.module').then(m => m.SoftwareStatisticsModule)
  // },
  // {
  //   path: 'trademarkStatistics',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/trademark-statistics/trademark-statistics.module').then(m => m.TrademarkStatisticsModule)
  // },
  // {
  //   path: 'billStatistics',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/bill-statistics/bill-statistics.module').then(m => m.BillStatisticsModule)
  // },
  // {
  //   path: 'bonusStatistics',
  //   pathMatch: 'prefix',
  //   loadChildren: () => import('../pages/bonus-statistics/bonus-statistics.module').then(m => m.BonusStatisticsModule)
  // }
]