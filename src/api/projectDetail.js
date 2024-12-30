import request from '@/utils/request'

// 查询项目详细详细
export function getProjectDetail(id) {
  return request({
    url: '/internal/projectDetail/' + id,
    method: 'get'
  })
}