// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'student-8g6uqj3pb5b79dd4',
        traceUser: true,
      });
    }

    this.globalData = {};
  }
});