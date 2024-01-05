
/*
  @Author:
  @Date: 2022/2/14
  @Description :
  @Params :
  @Example :
  @Last Modified by:
  @Last Modified time: 2022/2/14
*/

import { AxiosRequestConfig } from 'axios';
import { Http, formDataHttp } from './index';

// Http.defaults.baseURL = '/api';
// (mode === 'prod' || mode === 'development') && (Http.defaults.baseURL = '')

type AjaxReturnType = {
  // 请求的基本返回结构
  code: number;
  success: boolean;
  data: any;
  message: string;
  pageNum?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
};

interface Response<T> {
  code: string;
  data: T;
  message: string;
}

class Api {
  // eslint-disable-next-line class-methods-use-this
  protected post(url: string, data?: any, config?: AxiosRequestConfig, type = 'default') {
    return new Promise<Response<any>>((resolve, reject) => Http.post(url, data, config)
      .then((rs: any) => {
        if ((rs as any as Response<any>)?.code === '200') {
          resolve(rs as any as Response<any>);
          return;
        }
        type === 'default' ? resolve(rs as any as Response<any>) : reject();
      })
      .catch((e: any) => {
        reject(e);
      }));
  }

  protected get(
    url: string,
    data?: { [key: string]: any },
    config?: AxiosRequestConfig,
    type = 'default'
  ) {
    const params: Array<any> = [];
    // eslint-disable-next-line guard-for-in
    for (const x in data) {
      params.push(`${x}=${data[x]}`);
    }
    return new Promise<Response<any>>((resolve, reject) => {
      Http.get(`${url}${params.length ? '?' : ''}${params.join('&')}`, config)
        .then((rs: any) => {
          if ((rs as any as Response<any>)?.code === '200') {
            resolve(rs as any as Response<any>);
            return;
          }
          type === 'default' ? resolve(rs as any as Response<any>) : reject();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  protected delete(url: string, data?: any, config?: AxiosRequestConfig, type = 'default') {
    const params: Array<any> = [];
    for (const x in data) {
      /* esline-disable-line */
      params.push(`${x}=${data[x]}`);
    }
    return new Promise<Response<any>>((resolve, reject) => {
      Http.delete(`${url}?${params.join('&')}`, config)
        .then((rs: any) => {
          if (rs?.status === '200') {
            resolve(rs as Response<any>);
            return;
          }
          type === 'default' ? resolve(rs as any as Response<any>) : reject();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  protected put(url: string, data?: any, config?: AxiosRequestConfig, type = 'default') {
    return new Promise<Response<any>>((resolve, reject) => {
      Http.put(url, data, config)
        .then((rs: any) => {
          if (rs?.status === '200') {
            resolve(rs as Response<any>);
            return;
          }
          type === 'default' ? resolve(rs as any as Response<any>) : reject();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
}

class formDataApi {
  // eslint-disable-next-line class-methods-use-this
  protected post(url: string, data?: any, config?: AxiosRequestConfig, type = 'default') {
    return new Promise<Response<any>>((resolve, reject) => formDataHttp.post(url, data, config)
      .then((rs: any) => {
        if ((rs as any as Response<any>)?.code === '200') {
          resolve(rs as any as Response<any>);
          return;
        }
        type === 'default' ? resolve(rs as any as Response<any>) : reject();
      })
      .catch((e: any) => {
        reject(e);
      }));
  }

  protected get(
    url: string,
    data?: { [key: string]: any },
    config?: AxiosRequestConfig,
    type = 'default'
  ) {
    const params: Array<any> = [];
    // eslint-disable-next-line guard-for-in
    for (const x in data) {
      params.push(`${x}=${data[x]}`);
    }
    return new Promise<Response<any>>((resolve, reject) => {
      formDataHttp.get(`${url}${params.length ? '?' : ''}${params.join('&')}`, config)
        .then((rs: any) => {
          if ((rs as any as Response<any>)?.code === '200') {
            resolve(rs as any as Response<any>);
            return;
          }
          type === 'default' ? resolve(rs as any as Response<any>) : reject();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  protected delete(url: string, data?: any, config?: AxiosRequestConfig, type = 'default') {
    const params: Array<any> = [];
    for (const x in data) {
      /* esline-disable-line */
      params.push(`${x}=${data[x]}`);
    }
    return new Promise<Response<any>>((resolve, reject) => {
      formDataHttp.delete(`${url}?${params.join('&')}`, config)
        .then((rs: any) => {
          if (rs?.status === '200') {
            resolve(rs as Response<any>);
            return;
          }
          type === 'default' ? resolve(rs as any as Response<any>) : reject();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }

  protected put(url: string, data?: any, config?: AxiosRequestConfig, type = 'default') {
    return new Promise<Response<any>>((resolve, reject) => {
      formDataHttp.put(url, data, config)
        .then((rs: any) => {
          if (rs?.status === '200') {
            resolve(rs as Response<any>);
            return;
          }
          type === 'default' ? resolve(rs as any as Response<any>) : reject();
        })
        .catch((e: any) => {
          reject(e);
        });
    });
  }
}

export { Api, formDataApi};

export { AjaxReturnType, AxiosRequestConfig };
