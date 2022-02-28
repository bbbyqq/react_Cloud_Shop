import React, { Component } from 'react'
import './index.css'
import { Table, Button, Input } from 'antd';
import { Route } from 'react-router-dom'
import AddStore from './AddStore'
import logo from '../../../assets/img/login.png'

const { Search } = Input;

const onSearch = value => console.log(value);

const columns = [
  {
    title: '店铺编号',
    dataIndex: 'id',
  },
  {
    title: '店铺名称',
    dataIndex: 'name',
  },
  {
    title: '店铺logo',
    dataIndex: 'logo',
    render: (record) => <div style={{textAlign:"center"}}><img src={logo} alt="" width="50px" /></div>  // table表格添加图片
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '币种',
    dataIndex: 'currency',
  },
  {
    title: '配送方式',
    dataIndex: 'mode',
  },
  {
    title: '店铺公告',
    dataIndex: 'notice',
  },
  {
    title: '联系电话',
    dataIndex: 'number',
  },
];

const data = [];
for (let i = 0; i < 7; i++) {
  data.push({
    key: i,
    id: `${i}`,
    name: `店铺 ${i}`,
    address: `地址 ${i}`,
    currency: `￥人民币`,
    mode: `自提点自提`,
    notice: `2020年12月12日盛大开业`,
    number: `123456789`,
  });
}

export default class StoreManagement extends Component {
  // 设置title
  componentDidMount() {
    document.title = "店铺管理"
  }

  state = {
    selectedRowKeys: [],
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  addStore = () => {
    this.props.history.push({
      pathname: '/storeManagement/storeManagement/addStore',
    })
    // 暂时未想到好方法处理路由跳转后，如何只显示
    document.getElementById('storeManagement').style.display = "none";
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <div id="storeManagement">
          <div style={{ marginBottom: 16, float: "right" }}>
            <Search className="search"
              type="primary"
              placeholder="请输入搜索内容"
              enterButton="搜索"
              size="min"
              onSearch={onSearch}
            />
            {/* 此处的onClick必须用    ()=>    ，不然页面一加载，就会自动调用店家事件 */}
            <Button type="primary" style={{ marginLeft: '10px' }} onClick={() => this.addStore()}>新增</Button>
          </div>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered />
        </div>
        <Route path="/storeManagement/storeManagement/addStore" component={AddStore}></Route>
      </div>
    );
  }
}
