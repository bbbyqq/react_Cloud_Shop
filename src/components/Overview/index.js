import React, { Component } from 'react'
import Bar from './Bar'
import Line from './Line'

export default class Overview extends Component {
  // 设置title
  componentDidMount() {
    document.title="总览"
  }
  
  render() {
    return (
      <div>
        <Line />
        <Bar />
      </div>
    )
  }
}
