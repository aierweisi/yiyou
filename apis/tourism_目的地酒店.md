# 旅游app
## 目的地酒店
#### 请求地址
    /api/tourism/house
#### 请求方式
    GET
#### 请求参数
    {
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
		"house": [
			    {
			     "post_img": "image/img.jpg", //封面图，[字符串：必填]
			      "type_name": "上海大酒店", //类型名，[字符串：必填]
			      "type_price": "¥690起", //价格类型，[字符串：必填]
			      "type_position": "位于外滩/高端","上海夜景","昨日人气NO.1" //详情，[字符串：必填]
			      "type_introduce": "", //英文,[数值：必填] 
			   },
			    {
			     "post_img": "image/img.jpg", //封面图，[字符串：必填]
			      "type_name": "上海大酒店", //类型名，[字符串：必填]
			      "type_price": "¥690起", //价格类型，[字符串：必填]
			      "type_position": "位于外滩/高端","上海夜景","昨日人气NO.1" //详情，[字符串：必填]
			      "type_introduce": "", //英文,[数值：必填] 
			   },			    
			   {
			     "post_img": "image/img.jpg", //封面图，[字符串：必填]
			      "type_name": "上海大酒店", //类型名，[字符串：必填]
			      "type_price": "¥690起", //价格类型，[字符串：必填]
			      "type_position": "位于外滩/高端","上海夜景","昨日人气NO.1" //详情，[字符串：必填]
			      "type_introduce": "", //英文,[数值：必填] 
			   },
			   {
			     "post_img": "image/img.jpg", //封面图，[字符串：必填]
			      "type_name": "上海大酒店", //类型名，[字符串：必填]
			      "type_price": "¥690起", //价格类型，[字符串：必填]
			      "type_position": "位于外滩/高端","上海夜景","昨日人气NO.1" //详情，[字符串：必填]
			      "type_introduce": "", //英文,[数值：必填] 
			   },
		   ]
      }
    }