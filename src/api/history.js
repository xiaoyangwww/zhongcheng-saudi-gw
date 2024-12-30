import request from '@/utils/request'


// 查询所有历史记录详细
export function getHistory() {
  return request({
    url: '/internal/history/',
    method: 'get'
  })
}