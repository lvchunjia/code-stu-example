import { id } from 'element-plus/es/locale'
// src/mocks/handlers.js
import { rest } from 'msw'

export const logins = [
  rest.post('/api/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          id: '123456',
          name: 'coderwhy',
          token: 'aHFGKJfbhasjdfgbbfybdv'
        }
      })
    )
  }),

  rest.get('/api/users/:id', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          name: 'coderwhy',
          role: { id: '123456' }
        }
      })
    )
  }),

  rest.get('/api/role/:id/menu', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: '1',
            icon: 'el-icon-Monitor',
            name: '系统总览',
            type: '1',
            url: '/main/analysis',
            sort: '1',
            children: [
              {
                id: '5',
                url: '/main/analysis/dashboard',
                icon: '',
                type: '2',
                name: '核心技术'
              },
              {
                id: '6',
                url: '/main/analysis/overview',
                icon: '',
                type: '2',
                name: '商品统计'
              }
            ]
          },
          {
            url: '/main/system',
            id: '2',
            icon: 'el-icon-Setting',
            name: '系统管理',
            children: [
              {
                url: '/main/system/user',
                id: '7',
                icon: '',
                name: '用户管理'
              },
              {
                url: '/main/system/department',
                id: '8',
                icon: '',
                name: '部门管理'
              },
              {
                url: '/main/system/menu',
                id: '9',
                icon: '',
                name: '菜单管理'
              },
              {
                url: '/main/system/role',
                id: '10',
                icon: '',
                name: '角色管理'
              }
            ]
          },
          {
            url: '3',
            id: '3',
            path: '123123',
            redirect: '/main/product',
            icon: 'el-icon-goods',
            name: '商品中心',
            children: [
              {
                url: '/main/product/category',
                id: '11',
                redirect: '123123',
                path: '123123',
                icon: '',
                name: '商品类别'
              },
              {
                url: '/main/product/goods',
                id: '12',
                redirect: '123123',
                path: '123123',
                icon: '',
                name: '商品信息'
              }
            ]
          },
          {
            url: '4',
            id: '123123',
            path: '123123',
            redirect: '/main/story',
            icon: 'el-icon-chat-line-round',
            name: '随便聊聊',
            children: [
              {
                url: '/main/story/chat',
                id: '13',
                redirect: '123123',
                path: '123123',
                icon: '',
                name: '你的故事'
              },
              {
                url: '/main/story/list',
                id: '14',
                redirect: '123123',
                path: '123123',
                icon: '',
                name: '故事列表'
              }
            ]
          }
        ]
      })
    )
  })
]
