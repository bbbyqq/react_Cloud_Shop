import React, { Component } from 'react'
import { message } from 'antd'

export default class dashboard extends Component {
  // 设置title
  componentDidMount() {
    document.title="订单管理"
    message.error('暂未开发订单管理',0.5)
  }

  render() {
    return (
      <div style={{display:'flex',height:'100%'}}>
        <h1 style={{textAlign:"center",fontSize:'28px',margin:'0 auto',alignSelf: 'center'}}>
          订单管理
        </h1>
      </div>
    )
  }
}
