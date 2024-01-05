/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2020-12-22 18:20:54
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-08-19 14:30:14
 */
var router = require("koa-router")();

router.post("/", async function (ctx, next) {
  const Article = await new Articles();
  const token = ctx.request.header["x-access-token"];
  const result = await Article.addAriticles(ctx.request.body, token);
  if (result.length > 0) {
    ctx.body = {
      code: 200,
      message: "保存成功",
      success: true,
    };
  } else {
    ctx.body = {
      code: 400,
      message: "保存失败",
      success: false,
    };
  }
});

router.post("/getMenuNumber", async function (ctx, next) {
  const obj = [
      {
        name: '我主责的',
        check: true,
        count: '25',
        value: 'MainResponsibility'
    },
    {
        name: '我协作的',
        check: false,
        count: '11',
        value: 'cooperation'
    },
    {
        name: '我审批的',
        check: false,
        count: '100',
        value: 'Approve'
    }
  ]
    ctx.body = {
      code: 200,
      data: obj,
      message: "",
      success: true,
    };
});

// getMenuNumber

router.post("/deletDeliverable", async function (ctx, next) {
    ctx.body = {
      code: 200,
      message: "操作成功",
      success: true,
    };
});

router.post("/withDraw", async function (ctx, next) {
  ctx.body = {
    code: 200,
    message: "撤回成功",
    success: true,
  };
});

router.post("/reportApproval", async function (ctx, next) {
  ctx.body = {
    code: 200,
    message: "操作成功",
    success: true,
  };
});


router.post("/deliverables/list", async function (ctx, next) {
  let obj = [
    {
      id: '1001',
      name: '交付物1',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1002',
      name: '交付物2',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1003',
      name: '交付物3',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1004',
      name: '交付物4',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1005',
      name: '交付物5',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1006',
      name: '交付物6',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1007',
      name: '交付物8',
      version: 'v1',
      deliverer: '李泽'
    },
    {
      id: '1009',
      name: '交付物9',
      version: 'v1',
      deliverer: '李泽'
    }
  ]
  ctx.body = {
    code: 200,
    data: obj,
    message: "",
    success: true,
  };
});


router.post("/getCapital", async function (ctx, next) {
  let obj = []
  for (let i = 0; i < 20; i += 1 ) {
    if(i % 2 !== 0) {
      obj.push({
        id: `${i}100`,
        name: `交付物${i}`,
        manager: '记金池',
        status: 'nofund',
        // key: `${i}100`,
      })
    } else{
      obj.push({
        id: `${i}100`,
        name: `交付物${i}`,
        manager: '李泽',
        status: 'funded',
        // key: `${i}100`,
      })
    }
  }
  ctx.body = {
    code: 200,
    data: obj,
    message: "保存成功",
    success: true,
  };
});
// themeList

router.post("/themeList", async function (ctx, next) {
  let obj = [], allobj = []
  for (let i = 0; i < 20; i += 1 ) {
    obj.push({
      name: `主题${i}`,
      value: `主题${i}`,
    })
  }
  for (let i = 0; i < 30; i += 1 ) {
    allobj.push({
      name: `主题${i}`,
      value: `主题${i}`,
    })
  }
  let res = {
    selfSubject: obj,
    allSubject: allobj
  }
  ctx.body = {
    code: 200,
    data: res,
    message: "保存成功",
    success: true,
  };
});

router.post("/preDeliverable", async function (ctx, next) {
  const obj = [
    {
      "title": "限制意见书/规划要点",
      "status": "",
      "id": "1111",
      "collaborator": [
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
      ]
    },
    {
      title: '交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称',
      status: '',
      id: '1112',
      collaborator: [
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
      ]
    },
    {
      title: '交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称交付物名称/规划要点',
      status: '',
      id: '1113',
      collaborator: [
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
        {
          "name": "老纪",
          "id": "1101"
        },
        {
          "name": "老纪1",
          "id": "1102"
        },
        {
          "name": "老纪2",
          "id": "1103"
        },
      ]
    }
  ];
  ctx.body = {
    code: 200,
    message: "保存成功",
    data: obj,
    success: true,
  };
});

router.post("/mainList", async function (ctx, next) {
  const obj = [
    {
      id: '00091',
      name: '李泽'
    },
    {
      id: '00092',
      name: '李不凡'
    },
    {
      id: '00092',
      name: '记金池'
    },
    {
      id: '00093',
      name: '大爸爸吧'
    },
    {
      id: '00094',
      name: '小儿子'
    },
    {
      id: '00095',
      name: '集装箱'
    }
  ];
  ctx.body = {
    code: 200,
    message: "保存成功",
    data: obj,
    success: true,
  };
});

router.post("/father", async function (ctx, next) {
  const obj = [{
    name: "parent 1",
    id: "0-0",
    children: [
      {
        name: "parent 1-0",
        id: "0-0-0",
        children: [
          { name: "leaf", id: "0-0-0-0" },
          { name: "leaf", id: "0-0-0-1" },
        ],
      },
      {
        name: "parent 1-1",
        id: "0-0-1",
        children: [{ id: "0-0-1-0", name: "leafz" }],
      },
    ],
  }];
  ctx.body = {
    code: 200,
    message: "保存成功",
    data: obj,
    success: true,
  };
});

router.post("/deliveryTracking", async function (ctx, next) {
  const obj = [
    {
      "name": "李泽",
      "url": "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
      "time": "2010-12-09 0812:23",
      "action": "censorship",
      "approvalComments": "",
      "instances": [
        {
          "version": "1.0",
          "deliverableName": "交付物1",
          "submitter": "李泽"
        },
        {
          "version": "1.0",
          "submitter": "李泽",
          "deliverableName": "交付物1交付物1交付物1交付物1交付物1交付物1交付物1交付物1交付物1"
        }
      ]
    },
    {
      "name": "李泽",
      "url": "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
      "time": "2010-12-09 0812:23",
      "action": "adopt",
      "approvalComments": "通过",
      "instances" : []
    },
    {
      "name": "李泽",
      "url": "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
      "time": "2010-12-09 0812:23",
      "action": "turnDown",
      "approvalComments": "请先找项目确认后，在审批",
      "instances" : []
    },
    {
      "name": "李泽",
      "url": "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
      "time": "2010-12-09 0812:23",
      "action": "adopt",
      "approvalComments": "ok, 通过",
      "instances" : []
    },
    {
      "name": "李泽",
      "url": "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
      "time": "2010-12-09 0812:23",
      "action": "adopt",
      "approvalComments": "",
      "instances" : []
    },
    {
      "name": "李泽",
      "url": "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
      "time": "2010-12-09 0812:23",
      "action": "comments",
      "approvalComments": "补充意见",
      "instances" : []
    }
  ]
  ctx.body = {
    code: 200,
    message: "保存成功",
    data: obj,
    success: true,
  };
});

router.post("/allProject", async function (ctx, next) {
  const obj = [
    {
      value: "22",
      label: "北京大学食堂改造项目",
    },
    {
      value: "33",
      label: "清华大学食堂改造项目清华大学食堂改造项目",
    },
  ];
  ctx.body = {
    code: 200,
    data: obj,
    message: "",
    success: true,
  };
});
router.post("/project/info", async function (ctx, next) {
  const obj = {
    info: {
      status: "approval",
      label: [
        {
          id: "1001",
          name: "北京大学1",
        },
        {
          id: "1002",
          name: "北京大学2",
        },
        {
          id: "1003",
          name: "北京大学3",
        },
        {
          id: "1004",
          name: "北京大学4",
        },
        {
          id: "1005",
          name: "北京大学5",
        },
      ],
      isMain: true,
      isWithDraw: false,
      frontNumber: 3,
      projectName: "李泽不限撇比king",
      dueTime: "2010-09-09 至 2021-09-08 （每周二, 三， 四， 六重复）",
      associatedContract: [
        {
          name: "合同1",
          url: "http://www.baidu.com",
        },
        {
          name: "合同2",
          url: "http://www.baidu.com",
        },
        {
          name: "合同3合同合同合同合同合同合同合同",
          url: "",
        },
      ],
      collaborator: [
        {
          "name": "老纪1",
          "id": "1111"
        },
        {
          "name": "老纪2",
          "id": "1112"
        },
        {
          "name": "老纪3",
          "id": "1113"
        },
        {
          "name": "老纪4",
          "id": "1114"
        },
        {
          "name": "老纪5",
          "id": "1115"
        },
        {
          "name": "老纪6",
          "id": "1116"
        },
        {
          "name": "老纪1",
          "id": "1111"
        },
        {
          "name": "老纪2",
          "id": "1112"
        },
        {
          "name": "老纪3",
          "id": "1113"
        },
        {
          "name": "老纪4",
          "id": "1114"
        },
        {
          "name": "老纪5",
          "id": "1115"
        },
        {
          "name": "老纪6",
          "id": "1116"
        },
      ],
      describe: "老纪 和 李泽 撇比谁能一口气吃五十包子不喝水",
      mainPeople: "李泽",
      name: "选址意见书与规划设计要点",
      id: '10002'
    },
    content: [
      {
        time: "2010-09-09",
        theme: "猪肉馅包子",
        version: "1.0",
        type: "pdf",
        operator: "李泽",
        status: "submitted",
        id: "1001",
        isCapital: true,
        isDelete: true,
        isUpdate: true,
        isLook: true,
      },
      {
        time: "2010-09-09",
        theme: "牛肉馅包子",
        version: "1.0",
        type: "pdf",
        operator: "李泽",
        status: "unSubmit",
        id: "1003",
        isCapital: true,
        isDelete: true,
        isLook: true,

      },
      {
        time: "2010-09-09",
        theme: "羊肉馅包子",
        version: "1.0",
        type: "pdf",
        operator: "李泽",
        status: "overdue",
        id: "1004",
        isCapital: false,
        isDelete: true,
        isUpdate: true,
        isLook: true,
      },
      {
        time: "2010-09-09",
        theme: "鸡肉馅包子",
        version: "1.0",
        type: "pdf",
        operator: "李泽",
        status: "auditing",
        id: "1005",
        isCapital: false,
        isDelete: true,
        isUpdate: true,
        isLook: true,
      },
      {
        time: "2010-09-09",
        theme: "韭菜鸡蛋包子",
        version: "1.0",
        type: "pdf",
        operator: "李泽",
        status: "reject",
        id: "1006",
        isCapital: true,
        isDelete: true,
        isUpdate: true,
        isLook: true,
      },
      {
        time: "2010-09-09",
        theme: "韭菜鸡蛋包子",
        version: "1.0",
        type: "pdf",
        operator: "李泽",
        status: "finished",
        id: "1006",
        isCapital: true,
        isDelete: true,
        isUpdate: true,
        isLook: true,
      },
    ],
    approvalProcess: [
      {
        title: "直接主管审批",
        list: [
          {
            name: "李泽",
            img: "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
            id: "1001",
          },
          {
            name: "记金池",
            img: "https://img1.baidu.com/it/u=623994087,1173615898&fm=26&fmt=auto&gp=0.jpg",
            id: "1002",
          },
          {
            name: "吴伟",
            img: "https://img0.baidu.com/it/u=3438549326,2291272919&fm=26&fmt=auto&gp=0.jpg",
            id: "1003",
          },
        ],
      },
      {
        title: "部门主管审批",
        list: [
          {
            name: "李泽",
            img: "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
            id: "1001",
          },
          {
            name: "记金池",
            img: "https://img1.baidu.com/it/u=623994087,1173615898&fm=26&fmt=auto&gp=0.jpg",
            id: "1002",
          },
        ],
      },
    ],
  };
  ctx.body = {
    code: 200,
    data: obj,
    message: "",
    success: true,
  };
});
router.post("/projectNumber", async function (ctx, next) {
  const obj = [
    {
      title: "待提交",
      value: "waitSubmit",
      count: 11,
    },
    {
      title: "预期未提交",
      value: "unSubmitted",
      count: 12,
    },
    {
      title: "审批中",
      value: "approval",
      count: 3,
    },
    {
      title: "已完成",
      value: "finish",
      count: 0,
    },
    {
      title: "全部",
      value: "all",
      count: 109,
    },
  ];
  ctx.body = {
    code: 200,
    data: obj,
    message: "",
    success: true,
  };
});

router.post("/projectList", async function (ctx, next) {
  let obj = {
    list: [
      {
        title: "选址意见书/规划设计要点",
        number: "plk-009090-099",
        projectName: "北京大学食堂改造项目",
        status: "unSubmit",
        id: '9999',
        startTime: '2021-08-09',
        endTime: '2021-08-18',
        label: [
          {
            id: "11001",
            name: "道路桥梁",
          },
          {
            id: "11002",
            name: "市政基础设施建设",
          },
          {
            id: "11003",
            name: "道路桥梁-市政基础设施建设",
          },
          {
            id: "11004",
            name: "aaabbbbccccdd",
          },
          {
            id: "11005",
            name: "老纪牛逼威武霸气",
          },
        ],
        childrenProject: [
          {
            name: "写报告",
            mainPeople: "马龙",
            isMe: false,
            remainDay: "0",
            id: "10001",
            status: "finsh",
          },
          {
            name: "演讲汇报方案",
            mainPeople: "李泽",
            isMe: true,
            remainDay: "3",
            id: "10002",
            status: "undone",
          },
          {
            name: "演讲汇报方案",
            mainPeople: "李泽",
            isMe: false,
            remainDay: "3",
            id: "10003",
            status: "undone",
          },
          {
            name: "写报告222",
            mainPeople: "记金池",
            isMe: false,
            remainDay: "0",
            name: "写报告",
            id: "10004",
            status: "finsh",
          },
        ],
        allRemainDay: "6",
      },
      {
        title:
          "选址意见书/规划设计要点/选址意见书//选址意见书//选址意见书//选址意见书/规划设计要点选址意见书/规划设计要点选址意见书/规划设计要点选址意见书/规划设计要点选址意见书/规划设计要点",
        number: "plk-009090-099",
        projectName: "北京大学食堂改造项目",
        status: "overdue",
        id: '999933',
        startTime: '2021-08-09',
        endTime: '2021-08-18',
        label: [
          {
            id: "11001",
            name: "道路桥梁",
          },
          {
            id: "11001",
            name: "市政基础设施建设",
          },
          {
            id: "11001",
            name: "道路桥梁-市政基础设施建设",
          },
          {
            id: "11001",
            name: "aaabbbbccccdd",
          },
          {
            id: "11001",
            name: "老纪牛逼威武霸气",
          },
        ],
        childrenProject: [
          {
            name: "写报告",
            mainPeople: "马龙",
            isMe: false,
            id: "1000",
            remainDay: "0",
            status: "finish",
          },
          {
            name: "演讲汇报方案",
            mainPeople: "李泽",
            isMe: true,
            remainDay: "3",
            id: "10001",
            status: "undone",
          },
          {
            name: "演讲汇报方案",
            mainPeople: "李泽",
            isMe: false,
            remainDay: "3",
            id: "10002",
            status: "undone",
          },
          {
            name: "写报告222",
            mainPeople: "记金池",
            isMe: false,
            remainDay: "0",
            name: "写报告",
            id: "10003",
            status: "finish",
          },
        ],
        allRemainDay: "6",
      },
      {
        title: "选址意见书/规划设计要点",
        number: "plk-009090-099",
        projectName: "北京大学食堂改造项目",
        status: "auditing",
        id: '9999111',
        startTime: '2021-08-09',
        endTime: '2021-08-18',
        label: [
          {
            id: "11001",
            name: "道路桥梁",
          },
          {
            id: "11001",
            name: "市政基础设施建设",
          },
          {
            id: "11001",
            name: "道路桥梁-市政基础设施建设",
          },
          {
            id: "11001",
            name: "aaabbbbccccdd",
          },
          {
            id: "11001",
            name: "老纪牛逼威武霸气",
          },
          {
            id: "11001",
            name: "道路桥梁",
          },
          {
            id: "11001",
            name: "市政基础设施建设",
          },
          {
            id: "11001",
            name: "道路桥梁-市政基础设施建设",
          },
          {
            id: "11001",
            name: "aaabbbbccccdd",
          },
          {
            id: "11001",
            name: "老纪牛逼威武霸气",
          },
        ],
        childrenProject: [
          // {
          //   name: "写报告",
          //   mainPeople: "马龙",
          //   isMe: false,
          //   remainDay: "0",
          //   status: "finish",
          // },
          // {
          //   name: "演讲汇报方案",
          //   mainPeople: "李泽",
          //   isMe: true,
          //   remainDay: "3",
          //   status: "undone",
          // },
          // {
          //   name: "演讲汇报方案",
          //   mainPeople: "李泽",
          //   isMe: false,
          //   remainDay: "3",
          //   status: "undone",
          // },
          // {
          //   name: "写报告222",
          //   mainPeople: "记金池",
          //   isMe: false,
          //   remainDay: "0",
          //   name: "写报告",
          //   status: "finish",
          // },
        ],
        allRemainDay: "none",
      },
      {
        title: "选址意见书/规划设计要点",
        number: "plk-009090-099",
        projectName: "北京大学食堂改造项目",
        status: "finished",
        id: '9999112',
        startTime: '2021-08-09',
        endTime: '2021-08-18',
        label: [
          {
            id: "11001",
            name: "道路桥梁",
          },
          {
            id: "11001",
            name: "市政基础设施建设",
          },
          {
            id: "11001",
            name: "道路桥梁-市政基础设施建设",
          },
          {
            id: "11001",
            name: "aaabbbbccccdd",
          },
          {
            id: "11001",
            name: "老纪牛逼威武霸气",
          },
          {
            id: "11001",
            name: "道路桥梁",
          },
          {
            id: "11001",
            name: "市政基础设施建设",
          },
          {
            id: "11001",
            name: "道路桥梁-市政基础设施建设",
          },
          {
            id: "11001",
            name: "aaabbbbccccdd",
          },
          {
            id: "11001",
            name: "老纪牛逼威武霸气",
          },
        ],
        childrenProject: [
          // {
          //   name: "写报告",
          //   mainPeople: "马龙",
          //   isMe: false,
          //   remainDay: "0",
          //   status: "finish",
          // },
          // {
          //   name: "演讲汇报方案",
          //   mainPeople: "李泽",
          //   isMe: true,
          //   remainDay: "3",
          //   status: "undone",
          // },
          // {
          //   name: "演讲汇报方案",
          //   mainPeople: "李泽",
          //   isMe: false,
          //   remainDay: "3",
          //   status: "undone",
          // },
          // {
          //   name: "写报告222",
          //   mainPeople: "记金池",
          //   isMe: false,
          //   remainDay: "0",
          //   name: "写报告",
          //   status: "finish",
          // },
        ],
        allRemainDay: "none",
      },
    ],
    page: {
      pageSize: 10,
      pageNum: 2,
      total: 200
    }
  }
  
  ctx.body = {
    status: 200,
    data: obj,
    message: "",
    success: true,
  };
});

module.exports = router.routes();
