import request from '@/utils/request'

// 查询首页欢迎页管理详细
export function getAll() {
  return request({
    url: '/internal/home/welcome/all' ,
    method: 'get'
  })
}

