import React, {Component} from 'react'
import './index.css'
import {Row, Col} from 'antd';

import {
    ShopOutlined
} from '@ant-design/icons';

const icons = ['ShopOutlined', 'TableOutlined', 'HomeOutlined', 'ReloadOutlined', 'BarsOutlined', 'ClockCircleOutlined', 'ShopOutlined', 'TableOutlined', 'HomeOutlined', 'ReloadOutlined', 'BarsOutlined', 'ClockCircleOutlined', 'ShopOutlined', 'TableOutlined', 'HomeOutlined', 'ReloadOutlined', 'BarsOutlined', 'ClockCircleOutlined', 'ShopOutlined', 'TableOutlined', 'HomeOutlined', 'ReloadOutlined', 'BarsOutlined', 'ClockCircleOutlined', 'ShopOutlined', 'TableOutlined', 'HomeOutlined', 'ReloadOutlined', 'BarsOutlined', 'ClockCircleOutlined']
export default class Other extends Component {
    // 设置title
    componentDidMount() {
        document.title = "其他"
    }

    render() {
        return (
            <div>
                <Row>
                    {
                        icons.map((item, index) => {
                            return <Col key={index} className="colIcon" span={4}><ShopOutlined className="icon"/>
                                <div>{item}</div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}
