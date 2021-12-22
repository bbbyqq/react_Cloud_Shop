import React, {Component} from 'react';
import {DownOutlined} from '@ant-design/icons';
import {Row, Col, Tree, Card} from 'antd';

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-2',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-1-0',
                    },
                ],
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-2-0',
                    },
                    {
                        title: 'leaf',
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
                            showLine
                            switcherIcon={<DownOutlined/>}
                            defaultExpandedKeys={['0-0-0']}
                            onSelect={this.onSelect}
                            treeData={treeData}
                        />
                    </Col>
                    <Col span={19}>
                        <Card loading={true}></Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PickManagement;
