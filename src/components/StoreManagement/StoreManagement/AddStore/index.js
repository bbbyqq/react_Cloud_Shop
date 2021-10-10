import React, { Component } from 'react'
import { Form, Input, Button, Cascader, Radio, Checkbox, Upload, message } from 'antd';
import Position from './Position.js';
import { FileImageOutlined } from '@ant-design/icons';


// 表单style控制
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 10,
  },
};

// button style控制
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const onChange = (value) => {
  console.log(value);
}

export default class AddStore extends Component {

  componentDidMount() {
    // 设置title
    document.title = "新增"
  }

  back = () => {
    this.props.history.push({
      pathname: '/storeManagement/storeManagement',
    })
    // 暂时未想到好方法处理路由跳转后，如何只显示
    document.getElementById('storeManagement').style.display = "block";
  }

  render() {
    return (
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="店铺名称"
          name="name"
          rules={[
            {
              required: true,
              message: '请填写店铺名称',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="店铺公告"
          name="notice"
          rules={[
            {
              required: true,
              message: '请填写店铺公告',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={[
            {
              required: true,
              message: '请选择地址',
            },
          ]}
        >
          <Cascader options={Position} onChange={onChange} placeholder="请选择地址" />
        </Form.Item>
        <Form.Item
          label="详细地址"
          name="detailAddress"
          rules={[
            {
              required: true,
              message: '请填写详细地址',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="币种"
          name="currency"
          rules={[
            {
              required: true,
              message: '请选择币种',
            },
          ]}
        >
          <Radio.Group>
            <Radio value="a">￥人民币</Radio>
            <Radio value="b">€欧元</Radio>
            <Radio value="c">$美元</Radio>
            <Radio value="d">£英镑</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="联系电话"
          name="number"
          rules={[
            {
              required: true,
              message: '请填写联系电话',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="配送方式"
          name="mode"
          rules={[
            {
              required: true,
              message: '请勾选配送方式',
            },
          ]}
        >
          <Checkbox.Group>
            <Checkbox
              value="A"
              style={{
                lineHeight: '32px',
              }}
            >
              配送到家
              </Checkbox>
            <Checkbox
              value="B"
              style={{
                lineHeight: '32px',
              }}
            >
              到店/自提点自提
              </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          label="店铺logo"
          name="logo"
          valuePropName="fileList"  // 解决报错Warning: [antd: Upload] `value` is not a valid prop, do you mean `fileList`?
          rules={[
            {
              required: true,
              message: '请上传店铺logo',
            },
          ]}
        >
          <Upload {...props}>
            <FileImageOutlined style={{ fontSize: '70px' }} />
          </Upload>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>
            提交
        </Button>
          <Button type="default" onClick={() => this.back()}>
            返回
        </Button>
        </Form.Item>
      </Form>
    )
  }
}
