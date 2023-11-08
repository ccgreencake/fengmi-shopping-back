import request from '@/utils/request'
// test comment
export function getList(pageNum, pageSize) {
  return request({
    url: `/products?pageNum=${pageNum}&pageSize=${pageSize}`,
    method: 'get'
  })
}
