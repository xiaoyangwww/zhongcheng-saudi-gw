import request from '@/utils/request'

// 查询合作伙伴列表
export function listPartner(query) {
  return request({
    url: '/internal/partner',
    method: 'get',
    params: query
  })
}