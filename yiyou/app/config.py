import os

base_dir = os.path.abspath(os.path.dirname(__file__))

#通用配置

class Config:
    #秘钥
    SECRET_KEY = os.environ.get('SECRET_KEY') or '123456'
    #数据库
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACH_MODIFICATIONS = False

    #邮件发送
    MAIL_SERVER = os.environ.get('MAIL_SERVER') or ''
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME') or ''
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD') or ''

    #额外的初始化操作
    @staticmethod
    def init_app(app):
        pass


#开发环境
class DevelopmentConfig(Config):
    #SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(base_dir,'blog-dev.sqlite')
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1126482@localhost:3306/yiyou_dev?charset=utf8'
#测试环境
class TestingConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1126482@localhost:3306/yiyou_test?charset=utf8'

#生产环境
class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI =  'mysql+pymysql://root:1126482@localhost:3306/yiyou?charset=utf8'


#配置字典
config = {
    'development':DevelopmentConfig,
    'testing':TestingConfig,
    'production':ProductionConfig,

    'default':DevelopmentConfig
}