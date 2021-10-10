import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd'

export default class Bar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sales: [25, 220, 236, 176, 210, 188, 110, 97, 222, 131, 214],
    }
  }
  /**
   * 柱状图的配置对象
   */
  getOption = (sales) => {
    return {
      title: {
        text: '近一个月商品日销量'
      },
      tooltip: {},
      xAxis: {
        data: ["2021-04-10", "2021-04-11", "2021-04-12", "2021-04-13", "2021-04-14", "2021-04-15", "2021-04-16", "2021-04-17", "2021-04-18", "2021-04-19", "2021-04-20"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: sales,
        itemStyle: {
          normal: {
            color: '#0092f8',
            label: {
              show: true, //开启显示
              position: 'top', //在上方显示
              textStyle: { //数值样式
                color: '#0092f8',
                fontSize: 14
              }
            }
          }
        }
      }]
    };
  }
  render() {
    const { sales } = this.state;
    return (
      <div>
        <Card>
          <ReactEcharts option={this.getOption(sales)} />
        </Card>
      </div>
    )
  }
}
