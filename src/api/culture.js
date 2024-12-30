import request from '@/utils/request'


// 查询所有公司文化详细
export function getCulture() {
  return request({
    url: '/internal/culture/',
    method: 'get'
  })
}
