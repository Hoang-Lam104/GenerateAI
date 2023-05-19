import React, { useEffect, useState } from 'react'
import {
  Button,
  Input,
  Form,
  Typography,
} from 'antd';

const home = () => {
  const [form] = Form.useForm();
  const [content, setContent] =  useState()

  const onFinish = async (values: any) => {
    const keyword = values.keyword;
    const response = await fetch('/api/hello', {
      method: "POST",
      body: JSON.stringify(keyword),
      headers: {
        'Contenr-Type': 'application/json'
      }
    })
    .then(r => r.json())
    setContent(response);
  }

  return (
    <div>
      <Form form={form} onFinish={onFinish} >
        <Form.Item
          name='keyword'
          label='Keyword'
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Typography.Text>
        {content}
      </Typography.Text>
    </div>
  )
}

export default home