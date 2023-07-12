import axios, { AxiosInstance, AxiosError, AxiosHeaders, AxiosResponse } from 'axios'
import { ElMessage } from "element-plus";

console.log('import.meta.env', import.meta.env);

const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NODE_ENV,
  timeout: 6000
});

// 异常拦截处理器
const errorHandler = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 登录过期错误处理
        break;
      case 500:
        // 服务器错误处理
        break;
      default:
        ElMessage.error(`${error}`)
        break;
    }
  }
  return Promise.reject(error);
}

// 前置拦截器
request.interceptors.request.use((config: { headers: AxiosHeaders }) => {
  const token = sessionStorage.getItem('token');
  if(token) {
    config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`
  }
  console.log(config);
  return config;
}, errorHandler);

// 后置拦截器
request.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
}, errorHandler);

export default request;
