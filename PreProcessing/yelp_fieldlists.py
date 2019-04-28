BUSINESS = "business"
REVIEW = "review"
TIP = "tip"
CHECKIN = "checkin"
USER = "user"


def get_headers(_type):
    """
    Pre-defined headers for various categories
    """
    if _type == BUSINESS:
        return ["name", "city", "review_count", "hours", "categories", "latitude", \
                "stars", "attributes", "longitude", "address", "postal_code", "state", "is_open", \
                "business_id"]
    elif _type == REVIEW:
        return ["review_id", "user_id", "date", "useful", "text", "cool", "stars", "business_id", \
                "type", "funny"]
    elif _type == TIP:
        return ["business_id", "user_id", "date", "text", "likes", "type"]
    elif _type == CHECKIN:
        return ["business_id", "date"]
    else:
        return ["user_id", "name", "review_count", "yelping_since", "friends", "useful", "funny", \
                "cool", "fans", "elite", "average_stars", "compliment_hot", "compliment_more", \
                "compliment_profile", "compliment_cute", "compliment_list", "compliment_note", \
                "compliment_plain", "compliment_cool", "compliment_funny", "compliment_writer", \
                "compliment_photos", "type"]

business_list=[]
cuisine_list=["American", "Argentinian", "Bagels", "BBQ",  "Breakfast", "Brunch", "Bubble Tea",
              "Burgers",  "Californian Cuisine", "Cambodian", "Caribbean", "Cheesesteaks", "Chinese", "Crepes", "Dessert", "Dim Sum & Dumplings",
              "Diner", "English",   "Gluten Free",  "Grocery Items", "Halal", "Hawaiian", "Hot Dogs", "Indian",
              "Indonesian", "Irish", "Italian", "Japanese", "Juices", "Korean", "Late Night", "Latin American",  "Mediterranean", "Mexican",
              "Middle Eastern", "Moroccan", "Noodle Shops", "Pakistani",  "Pizza", "Polish", "Portuguese", "Russian", "Salads", "Sandwiches & Wraps",  "Seafood",
              "Smoothies & Shakes", "Soups", "Thai", "Turkish", "Vegan", "Vegetarian",  "Vietnamese",
              "Wings"]


def get_data(_type, _data):
    """
    Data-frame entries for various categories
    """
    data_arr = []
    #if(_data['{}'.format("state")]=="AZ" and _data['{}'.format("categories")] is not None and "Restaurants" in _data['{}'.format("categories")] ):
    #    print(_data['{}'.format("categories")])
    #    business_list.append(_data['{}'.format("business_id") ])
    for i in get_headers(_type):
        data_arr.append(_data['{}'.format(i)])

    #print(len(business_list))
    return data_arr

#count=0

def get_filtered_data(_type, _data):
    """
    Data-frame entries for various categories
    """
    data_arr = []
    #if(_data['{}'.format("business_id")] in business_list):
        #print("true")
        #count=count+1
    for i in get_headers(_type):
        data_arr.append(_data['{}'.format(i)])

    #print(count)
    return data_arr
