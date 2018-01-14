import os
from app import create_app
from flask_script import Manager,prompt_bool
from app.extensions import db
from app import models

#一、导入数据库迁移扩展库
from flask_migrate import Migrate, MigrateCommand

#获取配置
config_name = os.environ.get('FLASK_CONFIG') or 'default'
#创建Flask实例
app = create_app(config_name)


#数据库迁移

#1.创建命令行控制对象
manager = Manager(app)

#2.创建数据库迁移对象
migrate = Migrate(app,db)

#3.添加操作命令
manager.add_command('db',MigrateCommand)


#数据库操作
#1.创建数据库
@manager.command
def create():
    db.create_all()
    return '数据库已创建'

#2.删除数据库
@manager.command
def drop():
    if prompt_bool('确定要删除数据库然后跑路吗？'):
        db.drop_all()
        return '数据库删除完成'
    return '删除需谨慎！'




#启动项目
if __name__ == '__main__':
    manager.run()