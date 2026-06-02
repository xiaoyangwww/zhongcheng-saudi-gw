import request from '@/utils/request'

// 查询首页关于我们界面列表
export function getAbout() {
  return request({
    url: '/sa/about',
    method: 'get'
  })
}