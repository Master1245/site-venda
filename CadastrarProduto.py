# criar uma conexão com o banco de dados
from os.path import join, dirname
import mysql.connector
import os
from dotenv import load_dotenv


dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

passwd = os.environ.get("PASSWORD")
user = os.environ.get("USER")
database = os.environ.get("DATABASE")

mydb = mysql.connector.connect(
  host="localhost",
  user=user,
  passwd=passwd,
  database=database
)

mycursor = mydb.cursor()

sql = "INSERT INTO produtos (nome, preco, estoque) VALUES (%s, %s, %s)"
val = ("Sabonote", "R$2,99", "60UND")

mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")