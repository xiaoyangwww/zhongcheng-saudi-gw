import request from '@/utils/request'


// 查询公司荣誉详细
export function getHonor() {
  return request({
    url: '/internal/honor/',
    method: 'get'
  })
}


