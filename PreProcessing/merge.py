import pandas as pd

a = pd.read_csv("business_arizona.csv")
b = pd.read_csv("checkin_arizona.csv")
b = b.dropna(axis=1)
merged = a.merge(b, on='business_id')
merged.to_csv("merged_checkin.csv", index=False)