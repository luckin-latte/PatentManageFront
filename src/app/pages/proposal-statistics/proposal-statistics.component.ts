import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-statistics',
  templateUrl: './proposal-statistics.component.html',
  styleUrls: ['./proposal-statistics.component.css']
})
export class ProposalStatisticsComponent implements OnInit {
  
  public option!: {};

  constructor() { }

  ngOnInit(): void {
    this.data();
  }

  data(){
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['已通过', '审批中', '已驳回', '提案总数']
      },
      xAxis: [
        {
          type: 'category',
          data: ['一季度', '二季度', '三季度', '四季度'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '数量',
          min: 0,
          max: 120,
          interval: 20,
          axisLabel: {
            formatter: '{value} 份'
          }
        }
      ],
      series: [
        {
          name: '已通过',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '份';
            }
          },
          data: [
            20, 32, 28, 39
          ]
        },
        {
          name: '审批中',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '份';
            }
          },
          data: [
            26, 59, 30, 24
          ]
        },
        {
          name: '已驳回',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '份';
            }
          },
          data: [
            6, 5, 9, 7
          ]
        },
        {
          name: '提案总数',
          type: 'line',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '份';
            }
          },
          data: [
            52, 96, 67, 70
          ]
        }
      ]
    };
  }
}
