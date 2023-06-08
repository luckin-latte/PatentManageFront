import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { DepartmentProposalService } from '../department-proposal.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {
  
  public searchLoading = true;
  public dataSet: any; // 查询列表资料

  @Input() proposalCode!: string;

  constructor(
    private departmentProposalService: DepartmentProposalService
  ) {
  }

  ngOnInit() {
    this.search();
  }

  
  // 查询
  public search(): void {
    this.departmentProposalService.getReviewList(this.proposalCode).subscribe((res: any) =>{
      console.log('返回数据：', res);
      this.dataSet = res.data.list;
      this.searchLoading = false;
    })
  }

}
