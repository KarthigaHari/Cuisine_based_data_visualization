import csv
import sys
import pandas as pd
from datetime import datetime
d = {}
maxInt=sys.maxsize
while True:
    try:
        csv.field_size_limit(maxInt)
        break
    except OverflowError:
        maxInt = int(maxInt/10)

cuisine_list=["American (Traditional)",  "Chinese",  "Indian",
              "Italian","Japanese",  "French", "Mediterranean", "Mexican",
              "Middle Eastern",  "Thai"]

def addCategory(checkin, category):
    if category in cuisine_list:
        #print("true")
        if category not in checkin:
            #print("true")
            checkin[category] = 1
        else:
            #print("checked in "+category)
            checkin[category] += 1

def addCheckin(yelp, day, hour, categories):
    hours=hour.split(":")
    day=pd.Timestamp(day)
    translate_checkin = int(((day.dayofweek+1)*100)+int(hours[0]))
    if translate_checkin not in yelp:
        yelp[translate_checkin] = {}
    categories=categories.split(",")
    for category in categories:
        #print("printed here"+category)
        addCategory(yelp[translate_checkin], category.lstrip())

with open('arizona_cuisine_details.csv', 'w', newline='', encoding="UTF-8") as title:
    writer = csv.writer(title)


    with open('merged_checkin.csv', 'r',encoding="UTF-8") as csvfile:
        reader = csv.reader(csvfile, delimiter=",")
        row=next(reader, None)
        row.append("category")
        writer.writerow(row)
        for row in reader:
            categories=row[4].split(",")
            for x in categories:
                if x in cuisine_list:
                    row.append(x)
                    writer.writerow(row)
            dates_list=row[14].split(",")
            for dt in dates_list:
                day=dt.lstrip().split(" ")
                addCheckin(d, day[0], day[1], row[4])

# output to CSV for D3 consumption
data = pd.DataFrame(d)
data = data.fillna("0")
data = data.transpose()
data.to_csv("./arizona_cusine_checkins.csv")
