// pages/cloud-database.js

// 1.获取到对应的数据库
const db = wx.cloud.database()
// 2.获取到操作的集合
const studentsCol = db.collection("students")

Page({
  onAddDataTap() {
    console.log('add', studentsCol);
    // 3.向集合中新增数据
    // 3.1 .then方式获取
    studentsCol.add({
      data: {
        name: '中律南吕',
        age: 18,
        address: {
          city: '南京',
          pr: '江苏'
        },
        hobbies: ['篮球']
      },
      success: (res) => {
        console.log(res);
      }
    })

    // 3.2 promise方式获取
    studentsCol.add({
      data: {
        name: '中律测试',
        age: 17,
        address: {
          city: '南京',
          pr: '江苏'
        },
        hobbies: ['篮球']
      }
    }).then(res => {
      console.log(res);
    })
  },

  onDeleteDataTap() {
    // 1.根据id删除
    studentsCol.doc("1ba6b8d46469b624000021196edd433f").remove().then(res => {
      console.log(res);
    })
    // 2.根据条件删除 - 查询指令
    const cmd = db.command
    studentsCol.where({
      age: cmd.gt(17)
    }).remove().then(res => {
      console.log(res);
    })
  },

  onChangeDataTap() {
    // 1.根据id修改某一个字段update
    studentsCol.doc("0122a5876469b6e00d59d645780eec96").update({
      data: {
        age: 30
      }
    }).then(res => {
      console.log(res);
    })

    // 2.根据id替换原对象set
    studentsCol.doc("0122a5876469b6e00d59d645780eec96").set({
      data: {
        name: '中律测试',
        age: 17,
        address: {
          city: '南京',
          pr: '江苏'
        },
        hobbies: ['篮球']
      }
    }).then(res => {
      console.log(res);
    })

    // 3.更新多条数据
    const cmd = db.command
    studentsCol.where({
      age: cmd.gt(17)
    }).update({
      data: {
        age: 30
      }
    }).then(res => {
      console.log(res);
    })
  },

  onSelectDataTap() {

    // 方式一：通过D查询精确的某一条数据
    // studentsCol.doc('0122a5876469b6e00d59d645780eec96').get().then(res => {
    //   console.log(res);
    // })

    // 方式二：根据条件查询满足条件的数据
    // studentsCol.where({
    //   age: 30
    // }).get().then(res => {
    //   console.log(res);
    // })

    // 方式三：通过指令过滤数据
    const cmd = db.command
    studentsCol.where({
      age: cmd.lte(17)
    }).get().then(res => {
      console.log(res);
    })

    // 方式四：通过正则表达式匹配符合的数据
    // studentsCol.where({
    //   name: db.RegExp({
    //     regexp: "中律",
    //     options: 'i'
    //   })
    // }).get().then(res => {
    //   console.log(res);
    // })

    // 方式五：获取整个集合的数据（小程序端一次性最多20条，云函数中可以获取100条）
    // studentsCol.get().then(res => {
    //   console.log(res);
    // })

    // 方式六：过滤、分页、排序查询数据--使用field、skip、limit、orderBy
    // 分页：skip(offset)/limit(size)
    let page = 0
    let limit = 5
    // studentsCol.skip(page * limit).limit(limit).get().then(res => {
    //   console.log(res);
    // })

    // 排序 orderBy
    // studentsCol.skip(page * limit).limit(limit).orderBy("age", "asc").get().then(res => {
    //   console.log(res);
    // })

    // 过滤 field
    // studentsCol.field({
    //   age: true,
    //   _id: true
    // }).skip(page * limit).limit(limit).orderBy("age", "asc").get().then(res => {
    //   console.log(res);
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},
})