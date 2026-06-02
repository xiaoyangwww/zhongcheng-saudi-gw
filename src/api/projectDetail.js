import request from '@/utils/request'

// 查询项目详细详细
export function getProjectDetail(typeId,id) {
  return request({
    url: `/sa/projectDetail/info?typeId=${typeId}&id=${id}`,
    method: 'get'
  })
}