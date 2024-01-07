/*
 * @Author: liushuhao
 * @Date: 2020-08-15 20:30:43
 * @LastEditTime: 2024-01-07 16:43:36
 * @LastEditors: liushuhao
 * @Description:
 * @FilePath: /test-koa/routes/api.js
 */

const path = require("path");
const fs = require("fs");
let users = require("../controller/user/userlogin.js");
// let uploadjs = require('../controller/Upload/Upload.js');
var router = require("koa-router")();
let JwtUtil = require("../common/jwt.js");
const multipart = require("koa-multer");
const upload = multipart({ dest: path.join(process.cwd(), "public/upload") });
const uploadPath = path.join(process.cwd(), "public/upload");

// 登录
router.post("/userlogin", async function (ctx, next) {
  const user = new users(ctx.request.body);
  let result = await user.login(ctx.request.body);
  if (result.length > 0) {
    let jwt = new JwtUtil(result[0]._id);
    let token = jwt.generateToken();
    ctx.body = {
      code: 200,
      message: "登录成功",
      data: {
        id: result[0]._id,
        accessToken: token,
      },
      success: true,
    };
  } else {
    ctx.body = {
      code: 400,
      message: "登录失败",
      success: false,
    };
  }
});

// merge
router.post("/merge", async function (ctx, next) {
  console.log("输出", ctx.request.body);
  const {totalNumber,md5,name} = ctx.request.body;
  try {
    //分片存储得文件夹路径
    const chunckPath = path.join(uploadPath, md5, "/");
    //创建合并后的文件
    console.log(name + "我是视频地址");
    const filePath = path.join(uploadPath, name);
    //读取对应hash文件夹下的所有分片文件名称
    const chunckList = fs.existsSync(chunckPath)
      ? fs.readdirSync(chunckPath)
      : [];
    console.log(chunckList + "我是视频地址");
    //创建储存文件
    fs.writeFileSync(filePath, "");
    //判断切片是否完整
    console.log(chunckList.length, totalNumber, "我是总地址，和分片地址");
    let total = Number(totalNumber)
    console.log('输出', typeof(totalNumber))
    if (chunckList.length !== total) {
      // ctx.status = 500;
      // ctx.message = "Merge failed, missing file slices";
      // ctx.res.end('error');
      console.log('输出xxxxxxxxxxxxxxxxxxx',  )
      ctx.body = {
        code: 500,
        message: "合并文件失败",
        data: {
          url: "",
        },
        success: true,
      };
      process.exit();
    }
    for (let i = 0; i < total; i++) {
      const chunck = fs.readFileSync(chunckPath + md5 + "-" + i);
      //写入当前切片
      fs.appendFileSync(filePath, chunck);
      //删除已合并的切片
      fs.unlinkSync(chunckPath + md5 + "-" + i);
    }
    //删除空文件夹
    fs.rmdirSync(chunckPath);
    ctx.body = {
      code: 200,
      message: "合并文件成功",
      data: {
        url: "",
      },
      success: true,
    };
  } catch (e) {
    ctx.status = 500;
    ctx.res.end("合并失败");
    ctx.body = {
      code: 500,
      message: "合并文件失败",
      data: {
        url: "",
      },
      success: false,
    };
  }

});
// 上传
router.post("/upload", upload.single("file"), async function (ctx, next) {
  try {
    const {
      totalNumber, //分片总数
      chunckNumber, //分片序号
      chunkSize, //分片大小
      md5, //文件hash值（唯一）
      name,
    } = ctx.req.body;
    //指定hash文件路径
    // console.log("🚀 ~ file: api.js:56 ~ uploadPath:", uploadPath)
    const chunckPath = path.join(uploadPath, md5, "/");
    if (!fs.existsSync(chunckPath)) {
      fs.mkdirSync(chunckPath);
    }
    //移动文件到指定目录
    fs.renameSync(ctx.req.file.path, chunckPath + md5 + "-" + chunckNumber);
    // const fileresult = await uploadjs(file);
    ctx.body = {
      code: 200,
      message: "上传成功",
      data: {
        url: "",
      },
      success: true,
    }
  } catch (error) {
    console.log('输出',  error)
  }
;
  // if (fileresult.success) {
  //   ctx.body = {
  //     code: 200,
  //     message: '上传成功',
  //     data: {
  //       url: fileresult.key,
  //     },
  //     success: true
  //   };
  // } else {
  //   ctx.body = {
  //     code: 400,
  //     message: '上传失败',
  //     success: false
  //   };
  // }
});

// 注册
router.post("/register", async function (ctx, next) {
  const user = new users(ctx.request.body);
  let result = await user.register(ctx.request.body);
  if (result.length > 0) {
    ctx.body = {
      code: 200,
      message: "注册成功",
      success: true,
    };
  } else if (result.code === 11000) {
    ctx.body = {
      code: 400,
      message: "您已经注册过，请不要重复注册",
      success: false,
    };
  } else {
    ctx.body = {
      code: 400,
      message: "注册失败",
      success: false,
    };
  }
});

// 用户详情
router.post("/info", async function (ctx, next) {
  const user = new users(ctx.request.body);
  const token = ctx.request.header["x-access-token"];
  let result = await user.userinfos(token);
  if (result.length > 0) {
    ctx.body = {
      code: 200,
      data: result[0],
      message: "成功",
      success: true,
    };
  } else {
    ctx.body = {
      code: 400,
      message: "获取用户详情失败",
      success: false,
    };
  }
});

router.get("/jsonp", async function (ctx, next) {
  console.log(ctx.query, "1111");
  const { cb } = ctx.query;
  const title = {
    name: "111",
  };
  console.log(cb, "cb");
  ctx.body = `${cb}(${JSON.stringify(title)})`;
  return;
});

router.post("/test1", async function (ctx, next) {
  // console.log(ctx.query, '1111');
  // const { cb } =ctx.query;
  const title = {
    name: "111",
  };
  ctx.body = {
    code: 200,
    data: {
      list: title,
    },
    message: "成功",
    success: true,
  };
});
module.exports = router.routes();
