// pages/cloud-function/cloud-function.js
Page({
  async onPrimary() {
    const res = await wx.cloud.callFunction({
      name: 'test'
    })
    console.log(res);
  },

  async onSumTap() {
    const num1 = 10
    const num2 = 50
    const sum = await wx.cloud.callFunction({
      name: 'sum',
      data: {
        num1,
        num2
      }
    })
    console.log(sum);
  },

  async onFetchTap() {
    const res = await wx.cloud.callFunction({
      name: 'fetch'
    })
    console.log(res);
  },

  async onGetCode() {
const res = await wx.cloud.callFunction({
  name: 'getCode'
})
console.log(res);
  }
})