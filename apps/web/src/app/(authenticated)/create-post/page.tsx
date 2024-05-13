'use client'

import { Button, Form, Input, Upload, Typography } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreatePostPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  const onFinish = async values => {
    if (!userId) {
      enqueueSnackbar('User must be logged in to create a post', {
        variant: 'error',
      })
      return
    }

    try {
      const postData = await Api.PostData.createOneByUserId(userId, {
        content: values.content,
        imageUrl: fileList[0]?.url,
      })
      enqueueSnackbar('Post created successfully', { variant: 'success' })
      router.push(`/post/${postData.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to create post', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Create a New Post</Title>
      <Paragraph>Share your thoughts and images with the world.</Paragraph>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="content"
          label="Content"
          rules={[
            { required: true, message: 'Please input your post content!' },
          ]}
        >
          <Input.TextArea rows={4} placeholder="What's on your mind?" />
        </Form.Item>
        <Form.Item label="Image Upload">
          <Upload
            fileList={fileList}
            customRequest={handleUpload}
            maxCount={1}
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Post
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
