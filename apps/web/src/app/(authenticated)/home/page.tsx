'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Avatar, Space, Button, Grid } from 'antd'
import { LikeOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { useBreakpoint } = Grid
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const screens = useBreakpoint()
  const [posts, setPosts] = useState<Model.PostData[]>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postDatasFound = await Api.PostData.findMany({
          includes: ['user', 'likes', 'comments'],
        })
        setPosts(postDatasFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch posts', { variant: 'error' })
      }
    }

    fetchPosts()
  }, [])

  const navigateToPost = (postId: string) => {
    router.push(`/post/${postId}`)
  }

  const navigateToUser = (userId: string) => {
    router.push(`/user/${userId}`)
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>Welcome to SocialApp</Title>
      <Text>Explore what others are sharing!</Text>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {posts?.map(post => (
          <Card
            key={post.id}
            hoverable
            style={{ width: screens.xs ? '100%' : '80%', margin: '0 auto' }}
            actions={[
              <LikeOutlined key="like" />,
              <CommentOutlined
                key="comment"
                onClick={() => navigateToPost(post.id)}
              />,
            ]}
            onClick={() => navigateToUser(post.userId)}
          >
            <Card.Meta
              avatar={
                <Avatar src={post.user?.pictureUrl || <UserOutlined />} />
              }
              title={post.user?.name}
              description={dayjs(post.dateCreated).format('YYYY-MM-DD HH:mm')}
            />
            {post.content && <Text>{post.content}</Text>}
            {post.imageUrl && (
              <img
                alt="Post"
                src={post.imageUrl}
                style={{ maxWidth: '100%', marginTop: '10px' }}
              />
            )}
          </Card>
        ))}
      </Space>
    </div>
  )
}
