import request from '@/utils/request'

// 查询所有项目案例和类型
export function getProject() {
  return request({
    url: '/internal/project/',
    method: 'get'
  })
}

