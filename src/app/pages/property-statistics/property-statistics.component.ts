import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-statistics',
  templateUrl: './property-statistics.component.html',
  styleUrls: ['./property-statistics.component.css']
})
export class PropertyStatisticsComponent implements OnInit {
  
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
        data: ['专利', '软著', '商标', '知识产权']
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
            formatter: '{value} 件'
          }
        }
      ],
      series: [
        {
          name: '专利',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '件';
            }
          },
          data: [
            20, 32, 28, 39
          ]
        },
        {
          name: '软著',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '件';
            }
          },
          data: [
            26, 59, 30, 24
          ]
        },
        {
          name: '商标',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '件';
            }
          },
          data: [
            6, 5, 9, 7
          ]
        },
        {
          name: '知识产权',
          type: 'line',
          tooltip: {
            valueFormatter: function (value: number) {
              return value as number + '件';
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
