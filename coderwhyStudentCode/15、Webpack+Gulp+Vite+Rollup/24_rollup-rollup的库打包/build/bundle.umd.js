!(function (o, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("lodash"))
    : "function" == typeof define && define.amd
    ? define(["exports", "lodash"], e)
    : e(
        ((o =
          "undefined" != typeof globalThis ? globalThis : o || self).whyUtils =
          {}),
        o._
      );
})(this, function (o, e) {
  "use strict";
  function n(o, e) {
    return o + e;
  }
  var t = {
    formatPrice: function () {
      return "¥10000000";
    },
  };
  (o.foo = function () {
    console.log("foo exection~"),
      console.log(n(20, 30)),
      console.log(t.formatPrice()),
      console.log(e.join(["abc", "cba"])),
      console.log("Hello World");
  }),
    (o.mul = function (o, e) {
      return o * e;
    }),
    (o.sum = n);
});
