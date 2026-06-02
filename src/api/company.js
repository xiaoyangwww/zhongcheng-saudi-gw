import request from '@/utils/request'

// 查询公司联系信息详细
export function getMsg() {
    return request({
        url: '/sa/company/Msg', 
        method: 'get'
    })
}

// 查询公司简介
export function getCompanyProfile() {
    return request({
        url: '/sa/company/profile',
        method: 'get'
    })
}