#在其他路径，可以通过from .../models导入，而不需要.../models.xxx
from . import articles,consumes,location,users,comment

#在__init__同级目录，可以通过from . import db导入
# from app.extensions import db