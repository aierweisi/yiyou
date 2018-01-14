from flask import Flask
from app.config import config
from app.extensions import config_extensions

#封装一个方法，专门用于创建Flask实例
def create_app(config_name):
    #创建应用实例
    app= Flask(__name__)
    #初始化配置
    app.config.from_object(config.get(config_name) or config[ 'default'])
   #调用初始化函数
    config[config_name].init_app(app)
    #调用扩展初始化函数
    config_extensions(app)
    #返回应用实例
    return app