import request from '@/utils/request'

// 查询官网菜单列表
export function listMenu(query) {
  return request({
    url: '/internal/menu/visible/list',
    method: 'get',
    params: query
  })
}

//根据路由查询菜单列表
export function routeListMenu(route) {
  return request({
    url: '/internal/menu/route/list?route=' + route,
    method: 'get'
  })
}


