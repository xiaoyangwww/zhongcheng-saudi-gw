import request from '@/utils/request'


// 查询产品与服务
export function getService() {
  return request({
    url: '/sa/service',
    method: 'get'
  })
}


