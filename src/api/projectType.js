import request from '@/utils/request'

// 根据路由查询所有项目案例类型信息
export function getProjectType(projectId) {
  return request({
    url: '/sa/projectType?projectId=' + projectId,
    method: 'get'
  })
}

// 查询项目类型详细
export function getProjectTypeById(projectId,id) {
  return request({
    url: `/sa/projectType/info?projectId=${projectId}&id=${id}`,
    method: 'get'
  })
}



