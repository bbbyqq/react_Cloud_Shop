import React, { Component } from 'react'
import './index.css'

import {
  ShopOutlined,
  TableOutlined,
  HomeOutlined,
  ReloadOutlined,
  BarsOutlined
} from '@ant-design/icons';

export default class Other extends Component {
  // 设置title
  componentDidMount() {
    document.title = "其他"
  }

  render() {
    return (
        <div>
          <ul className="icon">
            <li><ShopOutlined/><div>ShopOutlined</div></li>
            <li><TableOutlined/><div>TableOutlined</div></li>
            <li><HomeOutlined/><div>HomeOutlined</div></li>
            <li><ReloadOutlined/><div>ReloadOutlined</div></li>
            <li><BarsOutlined/><div>BarsOutlined</div></li>
            <li><ShopOutlined/><div>ShopOutlined</div></li>
            <li><TableOutlined/><div>TableOutlined</div></li>
            <li><HomeOutlined/><div>HomeOutlined</div></li>
            <li><ReloadOutlined/><div>ReloadOutlined</div></li>
            <li><BarsOutlined/><div>BarsOutlined</div></li>
            <li><ShopOutlined/><div>ShopOutlined</div></li>
            <li><TableOutlined/><div>TableOutlined</div></li>
            <li><HomeOutlined/><div>HomeOutlined</div></li>
            <li><ReloadOutlined/><div>ReloadOutlined</div></li>
            <li><BarsOutlined/><div>BarsOutlined</div></li>
            <li><ShopOutlined/><div>ShopOutlined</div></li>
            <li><TableOutlined/><div>TableOutlined</div></li>
            <li><HomeOutlined/><div>HomeOutlined</div></li>
            <li><ReloadOutlined/><div>ReloadOutlined</div></li>
            <li><BarsOutlined/><div>BarsOutlined</div></li>
            <li><ShopOutlined/><div>ShopOutlined</div></li>
            <li><TableOutlined/><div>TableOutlined</div></li>
            <li><HomeOutlined/><div>HomeOutlined</div></li>
            <li><ReloadOutlined/><div>ReloadOutlined</div></li>
            <li><BarsOutlined/><div>BarsOutlined</div></li>
            <li><ShopOutlined/><div>ShopOutlined</div></li>
            <li><TableOutlined/><div>TableOutlined</div></li>
            <li><HomeOutlined/><div>HomeOutlined</div></li>
            <li><ReloadOutlined/><div>ReloadOutlined</div></li>
            <li><BarsOutlined/><div>BarsOutlined</div></li>
          </ul>
        </div>
        
    )
  }
}
