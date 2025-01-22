import request from '../request'

// 首页
export function getHome() {
  return request({
    url: `/page/homeDetail`,
    method: 'get',
  })
}

// 关于
export function getAbout() {
  return request({
    url: `/page/aboutDetail`,
    method: 'get',
  })
}

// 获取文章内容列表
export function getContentList(data) {
  return request({
    url: `/page/contentList`,
    method: 'post',
    data,
  })
}

// 获取文章内容详情
export function getContentDetail(id) {
  return request({
    url: `/page/contentDetail?id=${id}`,
    method: 'get',
  })
}

// 获取留言列表
export function getMessageList(data) {
  return request({
    url: `/page/messageList`,
    method: 'post',
    data,
  })
}

// 新增留言
export function addMessage(data) {
  return request({
    url: `/page/messageAdd`,
    method: 'post',
    data,
  })
}