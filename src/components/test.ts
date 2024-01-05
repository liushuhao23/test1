/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2024-01-05 10:21:13
 * @LastEditors: liushuhao
 * @LastEditTime: 2024-01-05 11:04:12
 */
import SparkMD5 from 'spark-md5';
self.onmessage = ({ data: { fileResult } }) => {
  const fileMd5 = SparkMD5.ArrayBuffer.hash(fileResult);
  console.log('🚀 ~ file: test.ts:18 ~ fileMd5:', fileMd5);
  self.postMessage({
    fileMd5,
  });
};
