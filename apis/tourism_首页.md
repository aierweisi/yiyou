# 旅游app
## 首页
#### 请求地址
    /api/tourism/list
#### 请求方式
    GET
#### 请求参数
    {
      type:"home",//strategy:攻略，public house:酒店，buy tickets:购票，travels:游记，questions and answers问答，
                                                      签证，租车，wifi，外币兑换，租车[字符串：选填] 
      hot: true, //本地推荐， [布尔：选填]
      localtype: "travel", //whole:全部 view:景点 one day tour:一日游 delicacy:美食 [字符串：选填]
      postype: "目的地推荐", //路线类型 [字符串：选填]
      terminitype:"termini", //hot push:热推 abroad:出境游 internal:国内游 ambitus:周边游 [字符串：选填]
      start: 0, //记录开始值 [数值：必填]
      count: 10 //返回记录条数 [数值：必填]
    }
#### 返回数据
	{
      "errcode": 0, // 错误代码：[数值：必填] 0 无错误 -1 有错误
      "errmsg": "", // 错误信息：[字符串：默认为空]
      "data": { // 数据内容
        start: 0, //记录开始值 [数值：必填]
        count: 10, //返回记录条数 [数值：必填]
        total: 120, //总记录条数 [数值：必填]
        subjects: [
          {
            img: "图片", //图片类型 [字符串：必填]
            place: '八达岭长城', // 地点名称 [字符串：必填]
            grade: '4.6分', //评分 [字符串：必填]
            rate: '5A', // 景区评级 [字符串：必填]
            introduce: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus', // 英文介绍 [字符串：必填]
            price: '¥35元', // 价格 [字符串：必填]
            
          },
          ......
        ]
      }
	}
