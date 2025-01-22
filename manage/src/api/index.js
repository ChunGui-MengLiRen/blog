import request from '../request'

// 登录
export function login(data) {
  return request({
    url: `/users/login`,
    method: 'post',
    data,
  })
}

// 首页
export function getHome() {
  return request({
    url: `/home/detail`,
    method: 'get',
  })
}
// 更新首页
export function updateHome(data) {
  return request({
    url: `/home/update`,
    method: 'post',
    data,
  })
}

// 关于
export function getAbout() {
  return request({
    url: `/about/detail`,
    method: 'get',
  })
}
// 更新关于
export function updateAbout(data) {
  return request({
    url: `/about/update`,
    method: 'post',
    data,
  })
}

// 获取文章内容列表
export function getContentList(data) {
  return request({
    url: `/content/list`,
    method: 'post',
    data,
  })
}

// 删除文章内容列表
export function delContentList(id) {
  return request({
    url: `/content/delete?id=${id}`,
    method: 'get',
  })
}

// 获取文章内容详情
export function getContentDetail(id) {
  return request({
    url: `/content/detail?id=${id}`,
    method: 'get',
  })
}

// 更新文章内容
export function updateContent(data) {
  return request({
    url: `/content/update`,
    method: 'post',
    data,
  })
}

// 新增文章内容
export function addContent(data) {
  return request({
    url: `/content/add`,
    method: 'post',
    data,
  })
}

// 获取留言列表
export function getMessageList(data) {
  return request({
    url: `/message/list`,
    method: 'post',
    data,
  })
}

// 删除留言列表
export function delMessageList(id) {
  return request({
    url: `/message/delete?id=${id}`,
    method: 'get',
  })
}

// 获取留言详情
export function getMessageDetail(id) {
  return request({
    url: `/message/detail?id=${id}`,
    method: 'get',
  })
}

// 更新留言内容
export function updateMessage(data) {
  return request({
    url: `/message/update`,
    method: 'post',
    data,
  })
}

// 新增留言内容
export function addMessage(data) {
  return request({
    url: `/message/add`,
    method: 'post',
    data,
  })
}