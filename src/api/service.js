import request from '@/utils/request'


// 查询产品与服务
export function getService() {
  return request({
    url: '/internal/service',
    method: 'get'
  })
}


