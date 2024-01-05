/*
 * @Author: liushuhao
 * @Date: 2020-10-12 16:36:30
 * @LastEditTime: 2020-10-13 23:16:36
 * @LastEditors: liushuhao
 * @Description:  文件上传阿里云
 * @FilePath: /test-koa/controller/Upload/Upload.js
 */
const fs = require('fs');
const func = require('../../config/upload/upload');
const uuid = require("uuid");
const { url } = require('koa-router');

const fileName = uuid.v1();


function upload(data) {
   const result = putStream(data);
   return result
}

async function putStream(files) {
    const file = files.file; // 获取上传文件
    if (file) {
        const fileName = uuid.v1();
        // 创建文件可读流
        const reader = fs.createReadStream(file.path);
         // 获取上传文件扩展名
        const ext = file.name.split(".").pop();
        // 命名文件以及拓展名
        const fileUrl = `${fileName}.${ext}`;       // 调用方法(封装在utils文件夹内)
        let result = {};
        result = await func.upToQiniu(reader, fileUrl);
        if (result) {
            if (Reflect.ownKeys(result).length > 0) {
                let url = `http://img.lsh1995.cn/${result.key}`
                Reflect.set(result, 'success', true);
                Reflect.set(result, 'key', url);
            } else {
                Reflect.set(result, 'success', false)
            }
            return result
        } else {
            Reflect.set(result, 'success', false)
            return  result
        }
    } else {}
    
    // let stream = fs.createReadStream(files.path);
    // try {

    // } catch (e) {
    //     console.log(e, 'e')
    // }
}


module.exports = upload;