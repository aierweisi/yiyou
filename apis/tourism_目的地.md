# 旅游app
## 目的地
#### 请求地址
    /api/tourism/termini
#### 请求方式
    GET
#### 请求参数
    {
      weather:"天气"，//[字符串：选填]
      type:"home",//view spot:景点，delicacy:美食，public house:酒店，shopping:购物，local special benefit:本地特惠，[字符串：选填]                                                 
      hot: true, //玩转上海， [布尔：选填]
      
      postype: "去哪玩", //地点类型 [字符串：选填]
      gettype: "住哪里"，//住宿类型 [字符串：选填]
      roadtype: "往哪走"，//路线类型 [字符串：选填]
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
            map: "地图", //地图类型 [字符串：必填]
            
            
          },
          ......
        ]
      }
	}
