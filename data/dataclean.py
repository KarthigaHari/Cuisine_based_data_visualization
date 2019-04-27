import sys
import csv

csv.field_size_limit(sys.maxsize)
with open("arizona_cuisine_details.csv", "r") as infile, open("arizona_cuisine_details_m.csv", "w") as outfile:
    #reader = csv.reader(infile)
    reader = csv.reader(infile, dialect=csv.excel_tab)
    writer = csv.writer(outfile)
    conversion = set('_"/.$')
    for row in reader:
        newrow = [''.join('_' if c in conversion else c for c in entry)
                  for entry in row]
        writer.writerow(newrow)
