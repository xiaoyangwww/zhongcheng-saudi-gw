import request from '@/utils/request'


// 查询所有公司文化详细
export function getOurAdvantages() {
  return request({
    url: '/sa/advantages',
    method: 'get'
  })
}
