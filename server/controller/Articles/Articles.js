/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2020-12-22 17:31:07
 * @LastEditors: liushuhao
 * @LastEditTime: 2020-12-29 23:33:06
 */
const db = require('../../config/db/db.js');
let JwtUtil = require('../../common/jwt.js');
let dayjs = require('dayjs')

class users {
    constructor(data) {
        this.Articlesinfo =data;
        this.init();
    }
    init() {
        const ariticlesParams = {
            'articleTitle': String,
            'articleDescription': String,
            'updateTime': String,
            'content': String,
            'articleid': String
        }
        db.init('ariticles', ariticlesParams);
    }
    async addAriticles(data, token) {
        let jwt = new JwtUtil(token);
        let userid = jwt.decodes();
        let datas = [];
        let updateTime = dayjs().format('YYYY-MM-DD');
        let params = {
            'articleTitle': data.articleTitle,
            'articleDescription': data.articleDescription,
            'updateTime': updateTime,
            'content': data.content,
            'articleid': userid.data
        }
        if (userid) {
            var result = await db.insertMany(params);
        }
        if (result) {
            datas.push(result);
            return datas
        }else {
            return [];
        }
    }
    async register(data) {
        const datas = {
            username: data.username,
            pwd: data.pwd,
            introduction: '',
            avatar: '',
            roles: [
                {
                    img: ''
                }
            ]
        }
        let result = await db.insertMany(datas);
        return result;
    }

    async articleList(data) {
       let jwt = new JwtUtil(data);
       const userid = jwt.decodes();
       const findobj = {
            articleid : userid.data
       }
        let result = await db.find(findobj, {'sort': {'updateTime': -1}});
       console.log(result, 'sss')
       let datas = [];
       if (result) {
           datas.push(result);
       }
       return datas;
    }
}

module.exports = users;