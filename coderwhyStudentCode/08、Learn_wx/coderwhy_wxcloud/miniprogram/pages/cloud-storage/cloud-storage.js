// pages/cloud-storage/cloud-storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 上传文件
  async onUploadTap() {
    // 1、从本地获取选择文件
    const imageRes = await wx.chooseMedia({
      type: 'image'
    })

    // 2、获取照片
    const imagePath = imageRes.tempFiles[0].tempFilePath

    // 3、获取图片名称
    const timetamp = new Date().getTime()
    // 通过云函数获取openid
    const openid = 'openid'
    const extName = imagePath.split('.').pop()
    const coulePath = `${timetamp}_${openid}.${extName}`

    // 4、将照片上传到云存储
    const uploadRes = await wx.cloud.uploadFile({
      filePath: imagePath,
      cloudPath: "studentFile/" + coulePath
    })
    console.log(uploadRes);
  },

  // 下载文件
  async onDownLoadTap() {
    const res = await wx.cloud.downloadFile({
      fileID: "cloud://student-8g6uqj3pb5b79dd4.7374-student-8g6uqj3pb5b79dd4-1307781159/studentFile/微信图片_20230107110807.jpg"
    })
    console.log(res);
  },

  // 删除文件
  async onDelFileTap() {
    const res = await wx.cloud.deleteFile({
      fileList: ["cloud://student-8g6uqj3pb5b79dd4.7374-student-8g6uqj3pb5b79dd4-1307781159/studentFile/微信图片_20230107110807.jpg"]
    })
    console.log(res);
  },

  // 临时文件
  async onTempFileTap() {
    const res = await wx.cloud.getTempFileURL({
      fileList: ["cloud://student-8g6uqj3pb5b79dd4.7374-student-8g6uqj3pb5b79dd4-1307781159/studentFile/1684660240680_openid.jpg"]
    })
    console.log(res);
  },
})