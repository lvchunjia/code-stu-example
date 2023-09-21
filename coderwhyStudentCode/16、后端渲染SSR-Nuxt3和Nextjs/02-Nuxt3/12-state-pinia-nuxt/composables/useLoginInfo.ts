export default function () {
  return useState("loginInfo", () => {
    return {
      name: "liujun",
      age: 18,
      token: "aabbcc",
    };
  }); // Ref
}
