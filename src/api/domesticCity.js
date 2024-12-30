import request from '@/utils/request'

// 查询国内网络城市表列表
export function getDomesticCity() {
  return request({
    url: '/internal/domesticCity',
    method: 'get'
  })
}


// 查询所有海外网络标题详细
export function getDomesticTitleMsg() {
  return request({
    url: '/internal/domesticCity/titleMsg',
    method: 'get'
  })
}