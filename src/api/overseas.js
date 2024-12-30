import request from '@/utils/request'

// 查询所有海外网络详细
export function getOverseas() {
  return request({
    url: '/internal/overseas',
    method: 'get'
  })
}


// 查询所有海外网络标题详细
export function getOverseasTitleMsg() {
  return request({
    url: '/internal/overseas/titleMsg',
    method: 'get'
  })
}