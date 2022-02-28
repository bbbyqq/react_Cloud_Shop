import React, {Component} from 'react';
import {DownOutlined} from '@ant-design/icons';
import {Row, Col, Tree} from 'antd';

const treeData = [
    {
        title: '广东',
        key: '0-0',
        children: [
            {
                title: '广州',
                key: '0-0-0',
                children: [
                    {
                        title: '白云区',
                        key: '0-0-0-0',
                    },
                    {
                        title: '越秀区',
                        key: '0-0-0-1',
                    },
                    {
                        title: '荔湾区',
                        key: '0-0-0-2',
                    },
                ],
            },
            {
                title: '深圳',
                key: '0-0-1',
                children: [
                    {
                        title: '南山区',
                        key: '0-0-1-0',
                    },
                ],
            },
            {
                title: '东莞市',
                key: '0-0-2',
                children: [
                    {
                        title: '南城区',
                        key: '0-0-2-0',
                    },
                    {
                        title: '东城区',
                        key: '0-0-2-1',
                    },
                ],
            },
        ],
    },
]
class PickManagement extends Component {
    // 设置title
    componentDidMount() {
        document.title = "自提点管理"
    }

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={5}>
                        <Tree
                            switcherIcon={<DownOutlined/>}
                            onSelect={this.onSelect}
                            treeData={treeData}
                            defaultExpandAll
                        />
                    </Col>
                    <Col span={19}>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PickManagement;
