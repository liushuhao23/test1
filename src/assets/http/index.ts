/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-04 09:08:43
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-05 14:50:29
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { WorkSpaceData } from './setHeader'
// import { getEnvManager, EnvManager } from '@xland/env';
// import { settingHttpHeaders } from './useHttp';

const isDev = process.env.NODE_ENV === 'development';

// const dev = getEnvManager().getEnv('VUE_APP_API_PROXY');
// const ss = getEnvManager().getEnv();


const ContentTypeMenu = {
  json: 'application/json',
  formData: 'application/x-www-form-urlencoded'
};

const Http = axios.create({
  baseURL: '/', // api请求的baseURL
  timeout: 600000,
  headers: {
    'Content-Type': ContentTypeMenu.json
    // 'Authorization':  `Bearer ${WorkSpaceData.jwt}`
  },
  maxContentLength: 2000
});

const formDataHttp = axios.create({
  baseURL: '/', // api请求的baseURL
  timeout: 600000,
  withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': ContentTypeMenu.formData
    // 'Authorization':  `Bearer ${WorkSpaceData.jwt}`
  },
  maxContentLength: 2000
});

// 请求拦截器
Http.interceptors.request.use(
  // (config: any) => settingHttpHeaders(config),
  (err: AxiosRequestConfig) => Promise.reject(err)
);
Http.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response: AxiosResponse) => {
    if (response.status === 200) {
      if (response.data.code !== 200 && response.data.code !== '200') {
        // message.error(response.data.message);
      }
      if (response.data.code === 200 || response.data.code === '200') {
        return response.data;
      }
    }
  },
  (err: { response: AxiosResponse }) => {
    // message.error(err.response.)
    console.log(err, 'err');
    // if (err.response.status === 401) {
    //     // window.eventCenterForAppalgorithm.dispatch(params)
    // } else {
    //     message.error('服务器错误，错误代码500！')
    // }
    return err;
  }
);

export { Http, formDataHttp };
