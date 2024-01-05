/*
 * @Author: liushuhao
 * @Date: 2020-08-16 21:51:18
 * @LastEditTime: 2020-12-29 23:31:54
 * @LastEditors: liushuhao
 * @Description:  数据库封装
 * @FilePath: /test-koa/config/db/db.js
 * @eg: '使用数据库之前请先使用init 方法选择要操作的数据库集合'
 */
const mongoose = require("mongoose");

const dbconfig = require("./dbconfig");

mongoose.connect(dbconfig.url + "/" + dbconfig.dbName, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("连接数据库失败");
        return;
    }
    console.log("连接数据库成功");
});

module.exports = {
    Collectionname: '',
    Collectionnames: '',
    CollectionSchemaname: '',
    
    init: function (name , params) {
            this.Collectionname = name;
            this.Collectionnames = this.Collectionname;
            this.CollectionSchemaname = `${name}Schema`;
            this.CollectionSchemaname = new mongoose.Schema(params);
            this.Collectionname = mongoose.model(this.Collectionnames, this.CollectionSchemaname, this.Collectionnames);
    },

    // 初始化验证
    InitialVerification() {
        if (!this.Collectionname) {
            return false;
        } else {
            return true
        }
    },
    //1.增
    //1）插入多条数据：单个数据可以是json对象，多个数据放在数组中；
    insertMany: function (aryjson) {
        if (this.InitialVerification()) {
            return new Promise((resolve, reject) => {
                this.Collectionname.insertMany(aryjson, function (err, docs) {
                    if (err) {
                        resolve(err);
                    } else {
                        resolve(docs)
                    }
                })
            })

        }
        else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }
    },
    //2.删
    //1）删除满足条件的一条数据：
    deleteOne: function (filter, callback) {
        if (this.InitialVerification()) {
            this.Collectionname.deleteOne(filter, function (err, doc) {
                callback(err, doc);
            })
        } else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }
    },
    //2）删除满足条件的所有数据：
    deleteMany: function (filter, callback) {
        if (this.InitialVerification()) {
            this.Collectionname.deleteMany(filter, function (err, doc) {
                callback(err, doc);
            })
        } else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }
    },
    //3.改
    //1）修改满足条件的一条数据：
    updateOne: function (filter, updatejson, callback) {
        if (this.InitialVerification()) {
            this.Collectionname.updateOne(filter, updatejson, function (err, doc) {
                callback(err, doc);
            })
        } else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }

    },
    //2）修改满足条件的多条数据：
    updateMany: function (filter, updatejson, callback) {
        if (this.InitialVerification()) {
            this.Collectionname.updateMany(filter, updatejson, function (err, doc) {
                callback(err, doc);
            })
        } else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }

    },
    //4.查
    //1）查找，排序，分页
    find: function (filter, sortcur) {
        console.log(sortcur, '5487')
        //sortcur:{"sort":{"age":-1},page,pageamount}
        if (this.InitialVerification()) {
            var sort = sortcur.sort || {};
            var page = Number(sortcur.page) || 0;
            var pageamount = Number(sortcur.pageamount) || 0;
            console.log(sortcur, '5512')
            return new Promise((resolve, reject) => {
                let result = this.Collectionname.find(filter, function(err, person){
                    if(err) {
                        resolve(err)
                    } else{
                        resolve(person)
                    }
                }).sort(sort).limit(pageamount).skip(page * pageamount);
            })
        } else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }
    },
    findOne: function (filter){
        if (this.InitialVerification()) {
            return new Promise((resolve, reject) => {
                let result = this.Collectionname.findOne(filter, function(err, person){
                    if(err) {
                        resolve(err)
                    } else{
                        resolve(person)
                    }
                });
            })
        } else{
            console.log('请使用init 方法 初始化数据库');
            return false;
        }
    },
    //2）获取满足条件的数据总个数
    count: function (filter, callback) {
        if (this.InitialVerification()) {
            this.Collectionname.countDocuments(filter, function (err, count) {
                callback(err, count);
            })
        } else {
            console.log('请使用init 方法 初始化数据库');
            return false;
        }

    }
};