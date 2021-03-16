import React from 'react';
import { Button, Form, Input, Select } from 'antd';
// import 'antd/dist/antd.css';

const { Option } = Select;

const Regist: React.FC = () => {
  return (
    <div>
      {' '}
      <Form {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item label="email" name="email" rules={[{ required: true, message: 'Please input your useremail!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="passwordCheck"
          name="passwordCheck"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="birthday"
          name="birthday"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input.Group compact>
            <Input placeholder="년(자)" />
            <Select defaultValue="월">
              <Option value="Option1">1</Option>
              <Option value="Option2">2</Option>
              <Option value="Option2">3</Option>
              <Option value="Option2">4</Option>
              <Option value="Option2">5</Option>
              <Option value="Option2">6</Option>
              <Option value="Option2">7</Option>
              <Option value="Option2">8</Option>
              <Option value="Option2">9</Option>
              <Option value="Option2">10</Option>
              <Option value="Option2">11</Option>
              <Option value="Option2">12</Option>
            </Select>
            <Input placeholder="일" />
          </Input.Group>
        </Form.Item>

        <Form.Item label="phone" name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
          <Input placeholder="대한민국 + 82" readOnly />
          <div>
            <Input placeholder="전화번호 입력" />{' '}
            <Button onClick={() => alert('인증번호는 : 225512 입니다.')} type="primary">
              인증번호 받기
            </Button>
          </div>
          <Input placeholder="인증번호를 입력하세요" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            완료
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default Regist;

/*
email, name, password, phone, birthday
*/
