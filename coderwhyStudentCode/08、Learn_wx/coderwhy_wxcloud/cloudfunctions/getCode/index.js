// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await cloud.openapi.wxacode.createQRCode({
    width: '320',
    path: 'pages/cloud-storage/cloud-storage'
  })

  const wxContext = cloud.getWXContext()
  const time = new Date().getTime()
  const openid = wxContext.OPENID
  const extension = res.contentType.split('/').pop()
  const cloudPath = `${time}_${openid}.${extension}`
  const fileRes = await cloud.uploadFile({
    fileContent: res.buffer,
    cloudPath: cloudPath
  })

  return fileRes
}