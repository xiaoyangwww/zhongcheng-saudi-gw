import request from '@/utils/request'

// 查询产品与服务
export function getServiceDetail(routeName) {
  return request({
    url: '/internal/service/detail?route=' + routeName,
    method: 'get'
  })
}
