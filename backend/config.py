import os
from dotenv import load_dotenv

load_dotenv()

ENV = os.getenv("FLASK_ENV", "development")

if ENV == "production":
    MYSQL_CONFIG = {
        "host": os.getenv("MYSQL_HOST_PROD"),
        "user": os.getenv("MYSQL_USER_PROD"),
        "password": os.getenv("MYSQL_PASSWORD_PROD"),
        "db": os.getenv("MYSQL_DB_PROD"),
    }
else:
    MYSQL_CONFIG = {
        "host": os.getenv("MYSQL_HOST"),
        "user": os.getenv("MYSQL_USER"),
        "db": os.getenv("MYSQL_DB"),
    }
