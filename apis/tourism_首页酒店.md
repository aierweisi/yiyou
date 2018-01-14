# 旅游app
## 首页酒店
#### 请求地址
    /api/tourism/hotel 
#### 请求方式
    GET
#### 请求参数
    {
      homehotel：国内酒店//必填
      abroadhotel:国外酒店//选填
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
        hotel: [
            {"position"：[
                {"geographical_position":"北京市昌平区沙阳路", "myposition":"我的位置"}, 
            ]}，
            {"time":[
                {"入住时间":"12月21日"},
                {"离店时间":"12月22日"}
            ]},
            {"hoteltype":[
                { "search_keyword": "关键字", //搜索关键字,[字符串：选填]
				  "weizhi": { //位置 [字符串：选填]
				   "pinpai": //品牌 [字符串：选填]
				   "hotelname": //酒店名字 [字符串：选填]                  
            ]},
            {"hotelprice":[
                {"hotel_level":"档次",//档次,[字符串：选填]},
                {"hotel_star":"星级",[字符串：选填]},
                {"hotel_price":"价格",[字符串：选填]}
            ]},
        ]
      }
    }