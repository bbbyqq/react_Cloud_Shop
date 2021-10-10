import React, { Component } from 'react'

export default class dashboard extends Component {
  // 设置title
  componentDidMount() {
    document.title="订单管理"
  }

  render() {
    return (
      <div>
        订单管理
      </div>
    )
  }
}
