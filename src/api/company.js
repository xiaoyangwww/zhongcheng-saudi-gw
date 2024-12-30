import request from '@/utils/request'

// 查询公司联系信息详细
export function getMsg() {
    return request({
        url: '/internal/company/Msg', 
        method: 'get'
    })
}

// 查询公司简介
export function getCompanyProfile() {
    return request({
        url: '/internal/company/profile',
        method: 'get'
    })
}