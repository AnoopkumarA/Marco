'use client'

import { useState, useEffect } from 'react'
import { Input, Button, Card, Avatar, Typography, Row, Col, Spin } from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SearchUsersPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const handleSearch = async () => {
    if (!search) {
      enqueueSnackbar('Please enter a username to search.', { variant: 'info' })
      return
    }
    setLoading(true)
    try {
      const usersFound = await Api.User.findMany({
        filters: { name: { ilike: search } },
        includes: ['posts', 'comments', 'likes'],
      })
      setUsers(usersFound)
      setLoading(false)
    } catch (error) {
      enqueueSnackbar('Failed to fetch users.', { variant: 'error' })
      setLoading(false)
    }
  }

  const goToUserProfile = userId => {
    router.push(`/user/${userId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Search Users</Title>
      <Text type="secondary">Enter a username to search for other users.</Text>
      <Input
        placeholder="Search by username"
        prefix={<UserOutlined />}
        value={search}
        onChange={e => setSearch(e.target.value)}
        onPressEnter={handleSearch}
        style={{ marginTop: 20, marginBottom: 20 }}
      />
      <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
        Search
      </Button>
      {loading ? (
        <Spin size="large" style={{ display: 'block', marginTop: 20 }} />
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          {users?.map(user => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                onClick={() => goToUserProfile(user.id)}
                style={{ width: '100%' }}
                cover={
                  <Avatar
                    src={user.pictureUrl || undefined}
                    size={64}
                    icon={<UserOutlined />}
                  />
                }
              >
                <Card.Meta
                  title={user.name}
                  description={`Joined: ${dayjs(user.dateCreated).format('MMMM D, YYYY')}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
