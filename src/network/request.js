import axios from 'axios';


export function request(config) {
      //1.创建axios实例
      const instence = axios.create({
          baseURL: 'http://123.207.32.32:8000',
          timeout: 5000
      });

      // 2.axios的拦截器
      // 请求拦截的作用
      instence.interceptors.request.use(config => {
        // console.log(config);
        return config;
      }, err => {
        console.log(err);
      })

      //响应拦截
      instence.interceptors.response.use(res => {
        return res.data
      }), err => {
        console.log(err);
      }

      return instence(config)
}




export function request1(config) {
  //1.创建axios实例
  const instence1 = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/w6',
      timeout: 5000
  });

  // 2.axios的拦截器
  // 请求拦截的作用
  instence1.interceptors.request.use(config => {
    // console.log(config);
    return config;
  }, err => {
    console.log(err);
  })

  //响应拦截
  instence1.interceptors.response.use(res => {
    return res.data
  }), err => {
    console.log(err);
  }

  return instence1(config)
}

