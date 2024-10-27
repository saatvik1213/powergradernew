import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://avnadmin:AVNS_c1QOQVfn2aet6BCtbVv@pg-375985cb-saatvik1213-8794.f.aivencloud.com:10339/defaultdb"
    SQLALCHEMY_TRACK_MODIFICATIONS = False



# export DATABASE_URI=