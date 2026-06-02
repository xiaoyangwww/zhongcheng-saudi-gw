import request from '@/utils/request'




// 新增联系信息收集
export function addContactPage(data) {
  return request({
    url: '/sa/contact',
    method: 'post',
    data: data
  })
}