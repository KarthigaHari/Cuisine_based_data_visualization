import mysql
import mysql.connector
import os

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="****",
  database="Yelp Dataset",
  auth_plugin="mysql_native_password"
)
businessids = ["g_6gQKZxj9HHbTa1OaUtnQ",
"miySsDV_1YKS3EqqGwblQQ",
"w3RH9W99ZIKvw0Qgibdn4w",
"GJ9CgvTBKaDb9qLFEBbzHg",
"vMnB2Cz3c1Io1IEyeLLVOA",
"EyE2NntpQyVPaLX7gSC9dA",
"f25NsTObxX0NEhBVm44-GA",
"C6MG3vrloHF8h9PPvZNiJA",
"7eJ5j1paJciRBPbRYU8u1A",
"JNlxqS6xX5qgsb90eDu8TQ",
"4-Ub64zwqopWZeOFsTYTzA",
"uKF_BmC-FwOLY-7Gtm1OSg",
"l3bmBkr8_Pw3G-QkX0tPrw",
"uoZwJJaplLsktVrRw0JiQw",
"8-F2JKHSCbgLQ55JxGU9gg",
"B5E_Qp3R1q0oRlzbYaWIkQ",
"7eEfpzUTAd1hAxXKlLQaJA",
"9vn0tLOpiGjSUp_mCI0ZLA"

]

# os.mkdir("Thai")
mycursor = mydb.cursor()
for x in businessids:
  sql = 'SELECT text FROM yelp_academic_dataset_review WHERE business_id = %s'
  mycursor.execute(sql, (x,))
  #mycursor.execute("SELECT text FROM yelp_academic_dataset_review WHERE business_id ="+x)
  myresult = mycursor.fetchall()
  f = open("Thai/"+x+'.txt',"w")
  for row in myresult:
    f.write(str(row))
  f.close()








"""
mycursor = mydb.cursor()
m = 'SSCH4Z2gw-hh2KZy7aH4qw'

sql = 'SELECT text FROM yelp_academic_dataset_review WHERE business_id = %s'
mycursor.execute(sql,(m,))
myresult = mycursor.fetchall()
for row in myresult:
  print(row)
"""
