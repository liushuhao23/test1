/*
 * @Author: liushuhao
 * @Date: 2020-08-19 10:11:09
 * @LastEditTime: 2020-10-12 17:27:32
 * @LastEditors: liushuhao
 * @Description:
 * @FilePath: /test-koa/controller/user/userlogin.js
 */

const db = require('../../config/db/db.js');
let JwtUtil = require('../../common/jwt.js');

class users {
    constructor(data) {
        this.userinfo =data;
        this.init();
    }
    init() {
        const userparams = {
            'username': String,
            'phone': Number,
            'userimg': String,
            'sex': String,
            'name': String,
            'pwd': String,
            'roles': Array,
            'introduction': String,
            'avatar' : String
        }
        db.init('user', userparams);
    }
    async login(data) {
        let result = await db.findOne(data);
        let datas = [];
        if (result) {
            datas.push(result);
        }
        return datas;
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

    async userinfos(data) {
       let jwt = new JwtUtil(data);
       const userid = jwt.decodes();
       const findobj = {
           _id : userid.data
       }
       let result = await db.findOne(findobj);
       let datas = [];
       if (result) {
           datas.push(result);
       }
       return datas;
    }
}

module.exports = users;
