"""
Converts .json file to .csv file
"""
import json
import csv
import re
from yelp_fieldlists import get_headers, get_data, get_filtered_data

BUSINESS = "business"
REVIEW = "review"
TIP = "tip"
CHECKIN = "checkin"
USER = "user"

TYPE_LISTS = [BUSINESS, REVIEW, TIP, CHECKIN, USER]


def normalize_text(text):
    """
    Remove non-ASCII chars.
    """
    text = re.sub('[^\x00-\x7F]+', ' ', text)
    return text


def json_to_csv(json_file, csv_file, file_type, count=None):
    """
    json_file ==> .json file to be converted
    csv_file ==> output csv file
    fileType ==> 'business' or 'review' or 'tip'
    count ==> Number of records to be created, ignore if entire .json file needs to be scanned
    """
    if file_type not in TYPE_LISTS:
        raise ValueError('Type {} not defined.'.format(file_type))

    if count is not None:
        curr = 0

    with open(csv_file, 'w', encoding='utf-8', errors='replace') as file:
        csv_writer = csv.writer(file, lineterminator='\n')
        csv_writer.writerow(get_headers(BUSINESS))
        with open(json_file, encoding='utf-8', errors='replace') as j_file:
            for line in j_file:
                data = json.loads(line)
                val=get_data(BUSINESS, data)
                if(len(val)!=0):
					csv_writer.writerow(get_data(_type,data)
                if count is not None:
                    curr += 1
                    if curr == count:
                        break

    print("file created successfully")
    curr=0
    with open("checkin_arizona.csv", 'w', encoding='utf-8', errors='replace') as file:
        csv_writer = csv.writer(file, lineterminator='\n')
        csv_writer.writerow(get_headers(CHECKIN))
        count=0
        with open("checkin.json", encoding='utf-8', errors='replace') as j_file:
            for line in j_file:
                data = json.loads(line)
                val=get_filtered_data(CHECKIN, data)
                if(len(val)!=0):
                    print(count)
                    count+=1
                    csv_writer.writerow(val)
                if count is not None:
                    curr += 1
                    if curr == count:
                        break


    print("File {} created successfully.".format(csv_file))


def main():
    """
    Entry-point for the function.
    """
    _type = USER
    #json_file = "D:\\New folder\\yelp_academic_dataset_{}_restaurants.json".format(_type)
    #csv_file = '{0}.csv'.format(json_file.split('.json')[0])

    json_to_csv("buiness.json","business_arizona.csv" , CHECKIN)


if __name__ == "__main__":
    main()

