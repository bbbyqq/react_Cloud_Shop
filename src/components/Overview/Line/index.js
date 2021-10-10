import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import { Card } from 'antd'

export default class Line extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stores: [15, 120, 36, 110, 90, 20]
    }
  }
  /**
   * 柱状图的配置对象
   */
  getOption = (stores) => {
    return {
      title: {
        text: '4月份新增用户'
      },
      tooltip: {},
      xAxis: {
        data: ["2021-04-10", "2021-04-11", "2021-04-12", "2021-04-13", "2021-04-14", "2021-04-15"]
      },
      yAxis: {},
      series: [
        {
          name: '用户数',
          type: 'line',
          data: stores,
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
    const { stores } = this.state;
    return (
      <div>
        <Card>
          <ReactEcharts option={this.getOption(stores)} />
        </Card>
      </div>
    )
  }
}
