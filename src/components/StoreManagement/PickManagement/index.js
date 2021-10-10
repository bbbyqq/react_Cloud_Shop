import React, { Component } from 'react'

export default class PickManagement extends Component {
  // 设置title
  componentDidMount() {
    document.title="自提点管理"
  }
  
  render() {
    return (
      <div>
        自提点管理
      </div>
    )
  }
}
