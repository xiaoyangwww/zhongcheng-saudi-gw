import request from '@/utils/request'

// 查询产品与服务
export function getServiceDetail(typeId) {
  return request({
    url: '/sa/service/detail?typeId=' + typeId,
    method: 'get'
  })
}

