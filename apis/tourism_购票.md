# 旅游app
## 购票
#### 请求地址
    /api/person/buy_tickets 
#### 请求方式
    GET
#### 请求参数
    {
      tickets_type:"type", // 购票类型，包括："passenger_ticket"机票，"train_ticket"火车票，"bus_ticket"汽车票，
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
        buy_tickets: [          
            {"ticket":[
                {"单程":"单程","出发地":"上海","出发日期":"2017/12/22 明天","ticket_type":"学生票","train_type":"高铁动车"},
                {"往返":"往返","返回地":"北京",}
            ]},    
        ]
      }
    }