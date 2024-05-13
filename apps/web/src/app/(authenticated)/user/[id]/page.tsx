'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Avatar, List, Space } from 'antd'
import { MessageOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
interface User {
  id: string
  name?: string
  pictureUrl?: string
  dateCreated: string
  posts?: PostData[]
}
interface PostData {
  id: string
  content?: string
  imageUrl?: string
  dateCreated: string
  comments?: Comment[]
  likes?: Like[]
}
interface Comment {
  id: string
  text?: string
  dateCreated: string
}
interface Like {
  id: string
  dateCreated: string
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UserProfilePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchUser = async () => {
      try {
        const userData = await Api.User.findOne(userId, {
          includes: ['posts', 'posts.comments', 'posts.likes'],
        })
        setUser(userData)
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
        router.push('/home')
      }
    }

    fetchUser()
  }, [userId, router])

  const IconText = ({
    icon,
    text,
  }: {
    icon: typeof UserOutlined
    text: React.ReactNode
  }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <PageLayout layout="narrow">
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Title level={2}>User Profile</Title>
          <Card
            style={{ marginBottom: 20 }}
            actions={[
              <IconText
                icon={UserOutlined}
                text="Posts"
                key="list-vertical-like-o"
              />,
            ]}
          >
            <Card.Meta
              avatar={<Avatar src={user?.pictureUrl || ''} />}
              title={user?.name}
              description={`Joined on ${dayjs(user?.dateCreated).format('MMMM D, YYYY')}`}
            />
          </Card>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page)
              },
              pageSize: 3,
            }}
            dataSource={user?.posts}
            footer={
              <div>
                <b>ant design</b> footer part
              </div>
            }
            renderItem={post => (
              <List.Item
                key={post.id}
                actions={[
                  <IconText
                    icon={LikeOutlined}
                    text={post.likes?.length || 0}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text={post.comments?.length || 0}
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  post.imageUrl ? (
                    <img width={272} alt="logo" src={post.imageUrl} />
                  ) : null
                }
              >
                <List.Item.Meta
                  title={
                    <a onClick={() => router.push(`/post/${post.id}`)}>
                      {post.content}
                    </a>
                  }
                  description={`Posted on ${dayjs(post.dateCreated).format('MMMM D, YYYY')}`}
                />
              </List.Item>
            )}
          />
        </>
      )}
    </PageLayout>
  )
}
