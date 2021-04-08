type LoginProps = {};

import { Form, Input, Button } from 'antd';

import { useSignIn } from '@src/hooks';

const Login: React.FC<LoginProps> = ({}) => {
  const { signIn, message } = useSignIn();
  return (
    <div>
      {' '}
      <h1>{message}</h1>
      <br />
      <Form {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Useremail"
          name="useremail"
          rules={[{ required: true, message: 'Please input your useremail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={signIn}>
            Submit
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

export default Login;
