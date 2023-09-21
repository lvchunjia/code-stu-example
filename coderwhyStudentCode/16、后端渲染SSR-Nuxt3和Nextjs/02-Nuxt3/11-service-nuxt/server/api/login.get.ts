export default defineEventHandler((event) => {
  let { req, res } = event.node;
  console.log(req.method);
  console.log(req.url);
  // 连接数据库 ...
  return {
    code: 200,
    data: {
      name: "liujun",
      age: 18,
      token: "aabbcc",
    },
  };
});
