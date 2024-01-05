/*
 * @Author: liushuhao
 * @Date: 2020-08-16 23:31:50
 * @LastEditTime: 2020-08-16 23:33:42
 * @LastEditors: liushuhao
 * @Description:  数据库连接例子
 * @FilePath: /test-koa/config/db/test.js
 */
const mdb=require("./config/db/db.js");

// 初始化数据库选择数据库集合 , 存入数据库的字段集合
mdb.init('title',  {
    name: String,
    age: Number,
    sex: String
});

// 增加方法
var aryjson=[{name:"qiaofeng",age:16},{name:"duanyu",age:34}];
    //  const json={name:"yangguo",age:20};
     mdb.insertMany(aryjson,function (err, doc) {
         if(err){
            console.log(err, 'err')
         }
         console.log('插入成功')
        //  res.send(doc);
     })
// mdb.