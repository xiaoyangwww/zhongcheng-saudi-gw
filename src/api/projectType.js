import request from '@/utils/request'

// 根据路由查询所有项目案例类型信息
export function getProjectType(routeName) {
  return request({
    url: '/internal/projectType?route=' + routeName,
    method: 'get'
  })
}

// 查询项目类型详细
export function getProjectTypeById(id) {
  return request({
    url: '/internal/projectType/' + id,
    method: 'get'
  })
}


