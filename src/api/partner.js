import request from '@/utils/request'

// 查询合作伙伴列表
export function listPartner(query) {
  return request({
    url: '/internal/partner/list',
    method: 'get',
    params: query
  })
}

// 查询合作伙伴详细
export function getPartner(id) {
  return request({
    url: '/internal/partner/' + id,
    method: 'get'
  })
}

// 新增合作伙伴
export function addPartner(data) {
  return request({
    url: '/internal/partner',
    method: 'post',
    data: data
  })
}

// 修改合作伙伴
export function updatePartner(data) {
  return request({
    url: '/internal/partner',
    method: 'put',
    data: data
  })
}

// 删除合作伙伴
export function delPartner(id) {
  return request({
    url: '/internal/partner/' + id,
    method: 'delete'
  })
}
