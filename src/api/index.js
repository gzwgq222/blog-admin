import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/api';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      // 'Content-Type':'application/x-www-form-urlencoded'
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    // if(response.data.errCode ==2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

 export default {
    get(url, params = {}) {
      return new Promise((resolve,reject) => {
        axios.get(url, {
          params:params
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    post(url, data = {}){
      return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
              resolve(response.data);
            },err => {
              reject(err)
            })
      })
    },
    download (url, target = false, fileName = '')  {
      try {
        const downloadEl = document.createElement('a')
        downloadEl.href = url
        if (target) downloadEl.target = '_blank'
        if (fileName) downloadEl.download = fileName
        document.body.appendChild(downloadEl)
        downloadEl.click()
        document.body.removeChild(downloadEl)
      } catch (error) {
        window.open(url)
      }
    }
 }