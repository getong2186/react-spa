/**
 * http配置（拦截器，统一处理所有http请求和响应）
 */
import axios from 'axios'
import { Toast } from 'antd-mobile';
// import _ from 'lodash'
import { browserHistory } from 'react-router'

// let Base64 = require('js-base64').Base64;
// let xss = require('xss');

const Axios = axios.create({
    timeout: 1200000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    req => {
        // 请求拦截
        return req
    },
    error => {
        return Promise.reject(error)
    }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        // 对响应数据做些事
        return res
    },
    error => {
        console.error(error);
        // 返回 response 里的错误信息
        return Promise.reject(error)
    }
)

export default Axios;