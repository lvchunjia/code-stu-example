// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await axios.get("http://123.207.32.32:8080/home/multidata")

  return {
    banners: res.data.data.banner
  }
}