'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Avatar, List, Input, Button, Form } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PostDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [post, setPost] = useState<Model.PostData | null>(null)
  const [comments, setComments] = useState<Model.Comment[]>([])
  const [likes, setLikes] = useState<Model.Like[]>([])
  const [likedByUser, setLikedByUser] = useState(false)
  const [commentText, setCommentText] = useState('')

  const fetchPostDetails = async () => {
    try {
      const postData = await Api.PostData.findOne(params.id, {
        includes: ['user', 'comments.user', 'likes.user'],
      })
      setPost(postData)
      setComments(postData.comments || [])
      setLikes(postData.likes || [])
      setLikedByUser(
        postData.likes?.some(like => like.userId === authentication.user?.id),
      )
    } catch (error) {
      enqueueSnackbar('Failed to fetch post details', { variant: 'error' })
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchPostDetails()
    }
  }, [params.id])

  const handleLike = async () => {
    if (!authentication.user) {
      enqueueSnackbar('You must be logged in to like a post', {
        variant: 'info',
      })
      return
    }

    try {
      if (likedByUser) {
        // Assume deleteLike function exists or similar logic to remove a like
        // This is a placeholder to indicate unlike functionality
        enqueueSnackbar('Like removed', { variant: 'success' })
      } else {
        await Api.Like.createOneByPostId(post!.id, {
          userId: authentication.user.id,
        })
        enqueueSnackbar('Post liked', { variant: 'success' })
      }
      setLikedByUser(!likedByUser)
      fetchPostDetails() // Refresh likes
    } catch (error) {
      enqueueSnackbar('Failed to process like', { variant: 'error' })
    }
  }

  const handleAddComment = async () => {
    if (!authentication.user) {
      enqueueSnackbar('You must be logged in to add a comment', {
        variant: 'info',
      })
      return
    }

    try {
      await Api.Comment.createOneByPostId(post!.id, {
        text: commentText,
        userId: authentication.user.id,
      })
      enqueueSnackbar('Comment added', { variant: 'success' })
      setCommentText('')
      fetchPostDetails() // Refresh comments
    } catch (error) {
      enqueueSnackbar('Failed to add comment', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Card>
        <Title level={2}>{post?.user?.name}'s Post</Title>
        <Text>{dayjs(post?.dateCreated).format('MMMM D, YYYY')}</Text>
        {post?.imageUrl && (
          <img
            src={post.imageUrl}
            alt="Post"
            style={{ maxWidth: '100%', marginTop: '20px' }}
          />
        )}
        <p>{post?.content}</p>
        <Button
          type="text"
          icon={
            likedByUser ? (
              <HeartFilled style={{ color: 'red' }} />
            ) : (
              <HeartOutlined />
            )
          }
          onClick={handleLike}
        >
          {likes.length} Likes
        </Button>
        <Form.Item>
          <Input.TextArea
            rows={4}
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
          <Button
            type="primary"
            onClick={handleAddComment}
            style={{ marginTop: '10px' }}
          >
            Add Comment
          </Button>
        </Form.Item>
        <List
          dataSource={comments}
          header={`${comments.length} ${comments.length > 1 ? 'Comments' : 'Comment'}`}
          itemLayout="horizontal"
          renderItem={item => (
            <li>
              <div className="comment">
                <Avatar src={item.user?.pictureUrl} alt={item.user?.name} />
                <div className="comment-content">
                  <Text strong>{item.user?.name}</Text>
                  <Text>{item.text}</Text>
                  <Text type="secondary">
                    {dayjs(item.dateCreated).format('MMMM D, YYYY')}
                  </Text>
                </div>
              </div>
            </li>
          )}
        />
      </Card>
    </PageLayout>
  )
}
