//防抖函数
export function debounce(fun, delay) {
  let time = null;
  return function (...args) {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      fun.apply(this, args)
    }, delay) 
  }
}




// 时间格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}