
function showThisCategory(name){
  console.log(name);
  document.getElementById("linechart").innerHTML="";
  draw();
  document.getElementById("selected").innerHTML=name;
  //console.log(document.getElementById("selected").innerHTML);
  load_dropdown(name);
  
  changeColumnVisiblity("visibility-class","hidden")
  changeColumnVisiblity(name,"visible")
  resetAllOpacity()
  changeColumnOpacity(name,1)
}

function initiliazerFunction(){
  showThisCategory("Mexican")
  plotBubbleChart("Mexican")
}


function changeColumnVisiblity(className,property) {
    var cols = document.getElementsByClassName(className);
	console.log("Leng:"+cols.length)
    for(i=0; i<cols.length; i++) {
      cols[i].style.visibility = property;
    }
}

function changeColumnOpacity(className,property) {
    var cols = document.getElementsByClassName("fade_"+className);
  console.log("Leng:"+cols.length)
    for(i=0; i<cols.length; i++) {
      cols[i].style.opacity = property;
    }
}

function swapColumnOpacity(className) {
    var cols = document.getElementsByClassName("fade_"+className);
    console.log("Leng:"+cols.length)
    for(i=0; i<cols.length; i++) {
      if(cols[i].style.opacity == 0.2 || cols[i].style.opacity == ""){
        console.log("opa:1")
        cols[i].style.opacity = "1"
      }else{
        cols[i].style.opacity = "0.2"
      }
    }
}


function swapColumnVisiblity(className) {
    var cols = document.getElementsByClassName(className);
    console.log("Leng:"+cols.length)
    for(i=0; i<cols.length; i++) {
      if(cols[i].style.visibility == "hidden"){
      	cols[i].style.visibility = "visible"
      }else{
      	cols[i].style.visibility = "hidden"
      }
    }
}

function resetAllOpacity() {
    var cols = document.getElementsByClassName("common_fade");
    for(i=0; i<cols.length; i++) {
        cols[i].style.opacity = "0.2"
    }
}

function plotBubbleChart(name)
{
  console.log(name);
  let data;
  switch(name)
  {
    case "American":
    data = [{
      cat: '1', name: 'bar', value: 32,
      desc: `
        "just a restaurant has a great bar and a outside deck with one of the best views of Las Vegas"<br/>
        "Sit at the bar and get to know your neighbors!"
      `
    }, {
      cat: '2', name: 'burger', value: 31,
      desc: `
        "my order is always the same: Veggie burger, with cheese, side of soup and fruit"<br/>
        "We usually get the bacon cheeseburger"
      `
    }, 
      
    {
      cat: '3', name: 'cheese', value: 27,
      icon: 'img/lodash.svg',
      desc: `
        "I order a different cheesecake each time because they are all delicious"<br/>
        "Mac and cheese was creamy and good not over cooked"
        `
    }, {
      cat: '4', name: 'fries', value: 25,
      icon: 'img/momentjs.png',
      desc: `
        "The fries were hot and had a nice salt & pepper seasoning"<br/>
        "One star loss for the fries which were a little oily and limp"
      `
    }, {
      cat: '5', name: 'salad', value: 23,
      icon: 'Numeral.js',
      desc: `
        "club sandwich and cobb salad always with a side of of greek fries"<br/>
        "Some of my favorite dishes include the french dip, the bbq chicken salad, and the balsamic glazed chicken"
      `
    }, {
      cat: '6', name: 'drinks', value: 21,
      icon: 'img/bootstrap.svg',
      desc: `
        "For a bar, they have great food! Drinks are cheap and good happy hour deals"<br/>
        "The drinks prices are decent but best during happy hour"
      `
    }, {
      cat: '7', name: 'beer', value: 21,
      icon: 'img/ember.png',
      desc: `
          "I was not happy with the bad service and then asked what beer might match my favorite beer"<br/>
          "The draft beer and wine lists were solid and the cocktails were pretty good"
      `
    },  {
      cat: '8', name: 'dinner', value: 21,
      icon: 'img/atom.png',
      desc: `
        "We had dinner in the patio, which was lovely"<br/>
        "By the end of dinner, everyone's plate was empty"
      `
    }, {
      cat: '9', name: 'meal', value: 15,
      icon: 'img/chrome-devtools.svg',
      desc: `
        "menu was oddly limited and had nothing in the way of sandwiches or other medium-sized meals"<br/>
        "the dining experience was about me and my wife having  wonderful meal together"
        `
    }, {
      cat: '10', name: 'breakfast', value: 12,
      icon: 'img/jenkins.png',
      desc: `
        "Great food and good breakfast atmosphere"<br/>
        "All in all, the Breakfast Platter didn't hit the spot at all"
              "     `
    }];

      break;
    case "Chinese":
    data=[{
      cat: '1', name: 'rice', value: 49,
      desc: `
        "Family fave is the chicken fried rice, mouth's watering just thinking about it"<br/>
        "I had the Soy Fritters with Curry Rice, and I don't know if it was just the wrong dish to order or what, but I didn't think it was very good"
      `
    }, {
      cat: '2', name: 'fried', value: 46,
      desc: `
        "They tried to appease by sending us some shooters and edamame, grilled shishito peppers, and fried green beans to start"<br/>
        "We also tried their fried pork chops served with a freshly made sauce,  excellent"
      `
    }, 
      
    {
      cat: '3', name: 'soup', value: 42,
      desc: `
        "As for the food, I was very impressed by the soup. We had hot and sour soup, and ordered a second one"<br/>
        "Mouth feels terrible after eating the Sliced Lamb Potato Noodle Soup"
        `
    }, {
      cat: '4', name: 'beef', value: 38,
      desc: `
        "I ordered beef and broccoli my girlfriend got orange chicken both were fresh the broccoli was not soggy or over cooked"<br/>
        "The Chef's Beef noodles were delicious with lots of great flavor"
      `
    }, {
      cat: '5', name: 'noodles', value: 32,
      desc: `
        "Great place for dumplings and brisket noodles, we tried their wonton, dumplings, beef brisket, fish balls, and crispy fish skins"<br/>
        "The noodles in the Mongolian Chicken dish were extremely soggy and pretty much turned into a doughy mess in the sauce"
      `
    }, {
      cat: '6', name: 'pork', value: 32,
      desc: `
        "To start off on a good note, the food quality and portions were decent_ I had a noodle, congee, duck and fried pork - everything tasted amazing and on point"<br/>
        "We tried the Taiwanese beef noodle, Taiwanese minced pork and rice, hot pot tofu with salty fish and chicken"
      `
    }, {
      cat: '7', name: 'sauce', value: 29,
      desc: `
        "My other all time favorite dishes is the snow pea pods, clams with black bean sauce, beef with wide rice noodles and the ground basil chicken"<br/>
        "Their dishes other than duck are a better choice as it's heavy on flavour and sauce typical of northern Chinese cuisine"
      `
    },  {
      cat: '8', name: 'shrimp', value: 25,
      desc: `
        "MUST try their Shrimp Vindaloo, Butter chicken, and Korma"<br/>
        "The shrimp korma was a creamy, spicy sauce with cashews and perfectly cooked shrimp"
      `
    }, {
      cat: '9', name: 'spicy', value: 23,
      desc: `
        "The tawa chicken was a little spicy but perfect in every way with a beautiful curry with white chicken and potatoes"<br/>
        "Definitely spicy as others have mentioned, I go medium and it's what others may consider hot hot!""
        `
    }, {
      cat: '10', name: 'egg', value: 14,
      desc: `
        "I was also surprised to see a selection of asian food like egg rolls and fried rice"<br/>
        "I am not fan of tomato the egg curry is like mix of tomato gravy but naan is super delicious and soft_within two days I been here twice"
                `
    }];
      break;
    case "Italian":
    data = [{
      cat: '1', name: 'pizza', value: 120,
      desc: `
        "If you want to choose your own toppings, then head on down to that infamous sub-par pizza joint"<br/>
        "And the pizza, they do it right_ Lil' Baci has a savoury and seasoned tomato sauce base that compliments the four cheese"
      `
    }, {
      cat: '2', name: 'pasta', value: 39,
      desc: `
        "Grab a classic white-clothed, candle-lit table and dip your focaccia in olive oil and balsamic before ordering whole wheat pasta"<br/>
        "The lasagne was good but a bit burnt on top which I didn't like_ The Alfredo pasta was flavourless"
      `
    }, 
      
    {
      cat: '3', name: 'sauce', value: 36,
      desc: `
        "The cream sauce tasted like flour paste and flooded the pasta, The red sauce was not acceptable for an italian restaurant"<br/>
        "Made daily with sauce from scratch, I highly recommend the Fettuccine Alfredo"
        `
    }, {
      cat: '4', name: 'salad', value: 34,
      desc: `
        "The pizza is delish, the salads are sooooo good"<br/>
        "My wife and I were regulars for wings on Wednesday and they have changed recipe for the sauces on the wings, as well as the mista salad"
      `
    }, {
      cat: '5', name: 'cheese', value: 28,
      desc: `
        "They also have pretty good cheese steaks"<br/>
        "Started with the Drunk Bread and it was tasty. A unique combination of crusty bread and cheese"
      `
    }, {
      cat: '6', name: 'bread', value: 27,
      desc: `
        "Worth 5 stars for the garlic bread alone, but there's oh so much more"<br/>
        "Amazing crusty bread with a huge portion, they don't skimp"
      `
    }, {
      cat: '7', name: 'wine', value: 25,
      desc: `
        "Italian Risotto that daily chef menu that was Chicken by White wine sauce"<br/>
        "It's BYOB but the recently opened a bar and they have a great wine selection"      `
    },  {
      cat: '8', name: 'fresh', value: 25,
      desc: `
        "The sauce is sweet like a real Italian pizza, the crust is crispy and tastes extremely fresh"<br/>
        "The food here is basic italian_ But done really well_ The salad is cold, crisp and fresh"
      `
    }, {
      cat: '9', name: 'amazing', value: 23,
      desc: `
        "The Italian food her is truly amazing"<br/>
        "The pizza was simply AMAZING. The crackling crispy crust was the best I've had in Tempe"       `
    }, {
      cat: '10', name: 'friendly', value: 17,
      desc: `
        "The wait staff was very friendly and service was perfect"<br/>
        "The space was clean and tasteful with a really interactive and friendly staff"
                `
    }];
      break;
    case "Japanese":
    data = [{
      cat: '1', name: 'sushi', value: 132,
      desc: `
        "I love how they have no rice sushi options"<br/>
        "Ambiance is relaxed and friendly, service is efficient, price range is reasonable, sushi is delicious"
      `
    }, {
      cat: '2', name: 'ramen', value: 48,
      desc: `
        "They also have a stamp card if you fall in love with their ramen and decide to eat there more than once"<br/>
        "We have been to Japan and the ramen is similar in taste"
      `
    }, 
      
    {
      cat: '3', name: 'rolls', value: 40,
      desc: `
        "My favorites are the Arizona, Hurricane, Tiger, Kee, Salmon Avacodo, and the California rolls are the best!"<br/>
         " Large selection of specialty sushi rolls, fav is the Lotus on Fire roll"
        `
    }, {
      cat: '4', name: 'fresh', value: 36,
      desc: `
        "Hip decor, reasonable prices and most importantly FRESH ingredients!"<br/>
        "In desert: green tea soft ice-cream, mocha cake, and of course fresh fruits"   
        `
    }, {
      cat: '5', name: 'rice', value: 34,
      desc: `
        "I would definitely come back! Next time for their rice bowls!"<br/>
        "The chicken and the pork were both delicious the best healthy chicken and rice combo I've experienced"
      `
    }, {
      cat: '6', name: 'fish', value: 28,
      desc: `
        "The rice tastes wrong, the fish is cut wrong"<br/>
        "We ordered a variety of items on the menu including smoked monkfish liver, beef tongue and many different skewers"
      `
    }, {
      cat: '7', name: 'spicy', value: 28,
      desc: `
        "The spicy tuna was great but it was an even toss up of good and not so good rolls"<br/>
        "Just had a simple lunch_  Spicy tuna roll, salmon and yellow tail"     `
    },  {
      cat: '8', name: 'salmon', value: 23,
      desc: `
        "Their salmon sushi pizza is the best I have had, anywhere"<br/>
        "The Viva Las Vegas roll looked and tasted great. My husband really liked the tuna_  Salmon was OK, I've had better"
      `
    }, {
      cat: '9', name: 'sashimi', value: 23,
      desc: `
        "If you're only going for a good dose of sashimi though I'll highly recommend it !!"<br/>
        "Also had their 6 piece sashimi platter that was super fresh and amazingly good which had 2 pieces of fresh Uni"      `
    }, {
      cat: '10', name: 'soup', value: 17,
      desc: `
      "For the lobster, what's not serverd is used to make the best miso soup that I've ever had"<br/>
      "We really enjoyed the steaming hot miso soup perfectly balanced not too salty or bland"
                
        `
    }];
      break;
    case "Indian":
    data = [{
      cat: '1', name: 'naan', value: 52,
      desc: `
        "saag paneer, daal, Raita, hot naan and rice along with chopped onions and pickle"<br/>
        "Naan is best fresh and hot"
      `
    }, {
      cat: '2', name: 'buffet', value: 52,
      desc: `
        "The buffet has over 12 different dishes to pick and choose from"<br/>
        "The decor and ambience is appealing for an Indian buffet restaurant"
      `
    }, 
      
    {
      cat: '3', name: 'lunch', value: 41,
      desc: `
        "Have not had Indian often but the lunch special"<br/>
        "I went to have buffet for lunch on Dec 28"
        `
    }, {
      cat: '4', name: 'rice', value: 36,
      desc: `
        "had a steak with a spicy sauce on rice that came with appetizer and dessert"<br/>
        "I wish they include rice with the entree"
      `
    }, {
      cat: '5', name: 'masala', value: 33,
      desc: `
        "I decided to get the tikka masala and the palak paneer and some rice"<br/>
        "I ordered lamb masala, chicken tikka masala and paneer for an appetizer"
      `
    }, {
      cat: '6', name: 'butter', value: 30,
      desc: `
        "spicy butter chicken and great fish pakora"<br/>
        "Butter chicken and Nan goes great together as do the desserts"
      `
    }, {
      cat: '7', name: 'tikka', value: 27,
      desc: `
        "The mushroom tikka masala was particularly interesting if you want a veggie option"<br/>
        "we had the Mango Chicken and the Tikka Masala Chicken curries"
      `
    },  {
      cat: '8', name: 'lamb', value: 25,
      desc: `
        "The chicken curry was great, the lamb was perfect"<br/>
        "The plum chicken, vindaloo, and lamb special are all very good meat dishes"
      `
    }, {
      cat: '9', name: 'paneer', value: 23,
      desc: `
        "the alu ghobi and matar paneer are delicious veggie dishes"<br/>
        "My wife ordered the paneer tikka masalla and loved it"
        `
    }, {
      cat: '10', name: 'dinner', value: 12,
      desc: `
        "I can get dinner for two people with a satisfying lunch the next day"<br/>
        "I've tried both the full sit down dinner and take out a few times each"
                `
    }];
      break;
    case "Mexican":
    data = [{
      cat: '1', name: 'tacos', value: 75,
      desc: `
        "We usually go for chicken tacos and quesadillas"<br/>
        "I had the fried avocado tacos and the black eyed pea salad"
      `
    }, {
      cat: '2', name: 'salsa', value: 45,
      desc: `
        "The chips salsa guacamole side is a must order"<br/>
        "I wish they would give out a larger bowl for the salsa since the small cups"
      `
    }, 
      
    {
      cat: '3', name: 'chips', value: 40,
      desc: `
        "The one of the things I did like was the tortilla chips with the hint of lime and the fresh pico"<br/>
        "Burritooooooo lunch special!!!!! awesome, tons of chips and salsa"
        `
    }, {
      cat: '4', name: 'burrito', value: 38,
      desc: `
        "I got a strawberry margarita, guacamole, and beef burrito. The drink was strong, guac was fresh"<br/>
        "Our steak burrito was soupy and couldn't finish it because it tasted so bad"
      `
    }, {
      cat: '5', name: 'fresh', value: 28,
      desc: `
        "Tortillas and chips made fresh!  Love it!"<br/>
        "Love the fresh squeezed juice from bar for cocktails"
      `
    }, {
      cat: '6', name: 'cheese', value: 24,
      desc: `
        "They came to the table piping hot, and the mix of brisket and cheese was perfect along with the extra crispy tortilla"<br/>
        "The cheese on the refried beans had cooled over as well"
      `
    }, {
      cat: '7', name: 'beans', value: 22,
      desc: `
        "The tortilla wasn't grilled long enough so taking the first bite was kinda soggy it's loaded with rice,beans and other toppings"<br/>
        "I had the two taco plate of grilled chicken and steak tacos with re-fried beans and rice"
      `
    },  {
      cat: '8', name: 'sauce', value: 21,
      desc: `
        "The meat was very good and tender, the green chili sause was good but on the bland side"<br/>
        "The tartar sause it comes with is so awesome"
      `
    }, {
      cat: '9', name: 'bar', value: 21,
      desc: `
        "I will continue to go to Macayo's with friends and sit in the bar for happy hour"<br/>
        "Great tortillas, good fresh salsa bar and some of the best taco meat"
        `
    }, {
      cat: '10', name: 'carne', value: 19,
      desc: `
        "We had the carne asada for two and there was plenty of food"<br/>
        "I really like their carne asada wet burrito so GOOD!""
                `
    }];
    break;
    case "Thai":
     data = [{
      cat: '1', name: 'curry', value: 72,
      desc: `
        "It was the best Thai Curry i had"<br/>
        "We ordered curry with rice"
      `
    }, {
      cat: '2', name: 'rice', value: 52,
      desc: `
        "The rice was dry. Loved the dessert"<br/>
        "I ordered an order of hummus, falafel, and a chicken schwarma"
      `
    }, 
      
    {
      cat: '3', name: 'spicy', value: 44,
      desc: `
        "Pita bread is so outrageously good"<br/> 
        "The plain pita is tender and fresh"
        `
    }, {
      cat: '4', name: 'soup', value: 37,
      desc: `
        "The dinner's best part was hot soup with thai curry"<br/>
        "Thai restaurant's soups have a very different taste"
        `
    }, {
      cat: '5', name: 'beef', value: 30,
      desc: `
        "My favourite of the night was the Grilled Beef Heart with Chili Lime Salsa"<br/>
        "I like the sun dried beef a lot"   
        `
    }, {
      cat: '6', name: 'rolls', value: 23,
      desc: `
        "Favs include their vegetable egg rolls , pineapple fried rice, pad thai, and the currys"<br/>
        "Can't say more than have the fresh and spring rolls and as much pad Thai as you can get your hands on!"
      `
    }, {
      cat: '7', name: 'noodles', value: 29,
      desc: `
        "Great Pad Thai & Drunken noodles!"<br/>
        "Thai rice noodles stir fried with sweet & sour tamarind sauce"
      `
    },  {
      cat: '8', name: 'shrimp', value: 24,
      desc: `
        "Stir-fried shrimp with curry powder, egg, onion and chili garlic sauce"<br/>
        "For our mains we had the garlic shrimp and Pad Thai_ Neither was impressive"
      `
    }, {
      cat: '9', name: 'green', value: 21,
      desc: `
        "My favorite is the green curry"<br/>
        "Green Curry with bamboo shoots, kaffir lime leaves, basil leaves, green peppers and coconut milk"  
      `
    }, {
      cat: '10', name: 'salad', value: 21,
      desc: `
        "The mango salad, which is typically sweet and sour with some vinegar, was pretty much just sweet"<br/>
        "Herbal Salad is a unique salad I've never found at any other Thai restaurant"
                
        `
    }];
      break;
    case "Mediterranean":
    data = [{
      cat: '1', name: 'salad', value: 43,
      desc: `
      "The Leo has to be one of the best salads in Charlotte"<br/>
      "Fried chicken: sour pickle brine, warm mushrooms and potato salad, soft egg"
      `
    }, {
      cat: '2', name: 'pita', value: 40,
      desc: `
        "Hummus, pita & that lentil soup are better here than anywhere else in the valley"<br/>
      "The falafel and hummus comes in a pita pocket filled with tahini, tomatoes, pickles, cabbage, cucumbers, and lettuce"
      `
    }, 
      
    {
      cat: '3', name: 'greek', value: 40,
      desc: `
        "Greek food is as good as any other Greek restaurant that I've ever been too"<br/>
        "The food was ok, not great the Greek salad was not impressive it didn't even have onions the chicken was tasty"
        `
    }, {
      cat: '4', name: 'fresh', value: 37,
      desc: `
        "Amazing fresh ingredients, everything is made from scratch, and wonderful fast and friendly service"<br/>
        "I'm not so sure that the strawberries were wild as advertised, but they were fresh!"
        `
    }, {
      cat: '5', name: 'hummus', value: 32,
      desc: `
        "My husband and I love Mediterranean food and we love hummus and butternut squash ravioli"<br/>
        "All of the grilled meat is good as is the baba ganoush and hummus"
      `
    }, {
      cat: '6', name: 'gyro', value: 31,
      desc: `
        "I had the gyro sandwich with fries"<br/>
        "We have gotten the gyro sandwich and the chicken alfredo and my kids are hooked"
      `
    }, {
      cat: '7', name: 'meat', value: 25,
      desc: `
        "The pita was one of the best ones I've had, they were loaded with meat"<br/>
        "One of our gyros had some relatively dry meat in it"
      `
    },  {
      cat: '8', name: 'lamb', value: 23,
      desc: `
        "I went with my boyfriend he got the lamb kabob and i got the chicken plate"<br/>
        "The bite i had of lamb was also very good my boyfriend wished it was a little more on the medium side but everyone has there own preference"
      `
    }, {
      cat: '9', name: 'falafel', value: 19,
      desc: `
        "The falafel sandwich and fries are fantastic, and I think only about 9 bucks"<br/>
        "There are plenty of other good falafel_shwarma places around that won't give you a hard time over a bottle of water"   `
    }, {
      cat: '10', name: 'shawarma', value: 17,
      desc: `
          "My favourite beef shawarma wrap I've ever had!"<br/>
          "Beef and lamb shawarma plate so good must try"
                
        `
    }];
      break;
    case "Middle Eastern":
    data = [{
      cat: '1', name: 'shawarma', value: 55,
      desc: `
        "The shawarma wasn't that big compared to other places but I liked that it was warmed on a panini press first"<br/>
        "There were pieces of chicken skin fat in my shawarma platter and the salad was stale"
      `
    }, {
      cat: '2', name: 'hummus', value: 44,
      desc: `
        "Solid hummus, good tabouli and Greek salads, and an incredible lentil soup"<br/>
        "I ordered an order of hummus, falafel, and a chicken schwarma"
      `
    }, 
      
    {
      cat: '3', name: 'pita', value: 43,
      desc: `
        "Pita bread is so outrageously good"<br/> 
        "The plain pita is tender and fresh"
        `
    }, {
      cat: '4', name: 'fresh', value: 43,
      desc: `
        "Salads look and taste very fresh"<br/>
        "There are too many excellent fresh Mediterranean places in the metro area to have such terrible pita and inconsistencies"
        `
    }, {
      cat: '5', name: 'rice', value: 39,
      desc: `
        "And the rice it came on was awesome"<br/>
        "They came with rice, bread and a fresh salad as sides"   
        `
    }, {
      cat: '6', name: 'salad', value: 36,
      desc: `
        "I had the Hummus and my friends both had some really good salad type thing"<br/>
        "came with a delicious light side salad with a savory dressing, olives and cheese"
      `
    }, {
      cat: '7', name: 'falafel', value: 33,
      desc: `
        "But then a month later my falafel sandwich was a dismal disappointment"<br/>
        "The buffet was a good selection of typical Mediterranean and Middle Eastern fare: pita, hummus, falafel, long grain rice, baba and tabuleh"
      `
    },  {
      cat: '8', name: 'sauce', value: 33,
      desc: `
        "Each order come in a plate with fresh salad and tahini sauce"<br/>
        "My only suggestion is to ask for extra taziki sauce but that's more of a preference"
      `
    }, {
      cat: '9', name: 'meat', value: 32,
      desc: `
        "The lamb meat was awful smelly nasty and the chicken meat was hard and the rice cold, the resturant was cold too"<br/>
        "The food well prepared and obviously better for you then some mystery meat sandwich and fries and yet the place isn't that crowded"  
      `
    }, {
      cat: '10', name: 'lamb', value: 25,
      desc: `
        "I ended up ordering a lamb dish and my partner ordered a chicken dish"<br/>
        "The lamb I had was probably the best I've ever had"
                
        `
    }];
      break;
    case "French":
    data = [{
      cat: '1', name: 'delicious', value: 40,
      desc: `
        "Delicious, friendly staff, cool atmosphere, all around great experience!"<br/>
        "Definitely try their eggplant and ANYTHING with pesto, it's delicious and the proportions are perfect for lunch!"
      `
    }, {
      cat: '2', name: 'wine', value: 30,
      desc: `
        "Service is disappointing, however the wine store is lovely and has a nice selection at reasonable prices"<br/>
        "We had a great time among friends and the staff, and the food with wine is amazing!"
      `
    }, 
      
    {
      cat: '3', name: 'dinner', value: 29,
      desc: `
        "We've been regulars at the Apricot Tree for ages, for both dinner and dessert"<br/>
        "Although I was full I couldn't pass up tasting each dish, and my companion lucked out since they scored half my dinner"
        `
    }, {
      cat: '4', name: 'steak', value: 25,
      desc: `
        "After reading others reviews about the steak frites and location we decided to give it a try"<br/>
        "The steak tartare was awesome"
      `
    }, {
      cat: '5', name: 'cheese', value: 24,
      desc: `
        "I had the Quebec raised lamb w lentils and veg_ My kids had the flank steak w blue cheese sauce and my husband had the scallops"<br/>
        "The bagel with chive cream cheese with smoked samon and capers was all tasty, but not a stand out item"
      `
    }, {
      cat: '6', name: 'bread', value: 23,
      desc: `
        "We selected breads , warm and flavorful,  from a tray brought to our table often"<br/>
        "In my shame I must confess that the best I could do was to sop up the remaining broth with more of that tasty bread"
      `
    }, {
      cat: '7', name: 'salad', value: 22,
      desc: `
        "We had the kale salad, duck confit meatballs and the seared scallops"<br/>
        "One of my favorite parts of the meal was the date salad"
      `
    },  {
      cat: '8', name: 'dessert', value: 21,
      desc: `
        "Dessert was a chocolate type of cake mousse fondant wich was perfect for a chocolate lover!"<br/>
        "Dessert was some kind of cake with rum just poor in it"
      `
    }, {
      cat: '9', name: 'chocolate', value: 18,
      desc: `
        "The chocolate fondue was pretty run of the mill but it had some creme puffs as a dipping options which I liked"<br/>
        "I will dream about that chocolate souffle until the day I die_ It was THAT good"
        `
    }, {
      cat: '10', name: 'chicken', value: 17,
      desc: `
        "For entrees, we had the bone-in pork chop, brick chicken and the scallops & pork belly, and they were all fantastic"<br/>
        "We ordered chicken and waffles, steak frites, 1_2 dozen oysters, and cocktails"
                `
    }];
      break;
  }

    console.log(data);

    document.getElementById("bubblechart_div").innerHTML="";
    document.getElementById("header").innerHTML="Know more about the Cuisine - "+name;
    var svg = d3.select("#bubblechart_div").append("svg")
    .attr("width","1100")
    .attr("height","700");
    console.log(svg)
    let width = document.body.clientWidth; // get width in pixels
    let height = +svg.attr('height');
    let centerX = width * 0.5;
    let centerY = height * 0.5;
    let strength = 0.05;
    let focusedNode;

    let format = d3.format(',d');

    let scaleColor = d3.scaleOrdinal(d3.schemeCategory20);

    // use pack to calculate radius of the circle
    let pack = d3.pack()
      .size([width , height ])
      .padding(1.5);

    let forceCollide = d3.forceCollide(d => d.r + 1);

    // use the force
    let simulation = d3.forceSimulation()
      // .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody())
      .force('collide', forceCollide)
      // .force('center', d3.forceCenter(centerX, centerY))
      .force('x', d3.forceX(centerX ).strength(strength))
      .force('y', d3.forceY(centerY ).strength(strength));

    // reduce number of circles on mobile screen due to slow computation
    if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
      data = data.filter(el => {
        return el.value >= 50;
      });
    }

    let root = d3.hierarchy({ children: data })
      .sum(d => d.value);
    let nodes = pack(root).leaves().map(node => {
      //console.log('node:', node.x, (node.x - centerX) * 2);
      const data = node.data;
      return {
        x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
        y: centerY + (node.y - centerY) * 3,
        r: 0, // for tweening
        radius: node.r, //original radius
        id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
        cat: data.cat,
        name: data.name,
        value: data.value,
        icon: data.icon,
        desc: data.desc,
      }
    });
    simulation.nodes(nodes).on('tick', ticked);

    let node = svg.selectAll('.node')
      .data(nodes)
      .enter().append('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', (d) => {
          if (!d3.event.active) simulation.alphaTarget(0.2).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (d) => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        })
        .on('end', (d) => {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    node.append('circle')
      .attr('id', d => d.id)
      .attr('r', 0)
      .style('fill', d => scaleColor(d.cat))
      .transition().duration(2000).ease(d3.easeElasticOut)
        .tween('circleIn', (d) => {
          let i = d3.interpolateNumber(0, d.radius);
          return (t) => {
            d.r = i(t);
            simulation.force('collide', forceCollide);
          }
        })

    node.append('clipPath')
      .attr('id', d => `clip-${d.id}`)
      .append('use')
      .attr('xlink:href', d => `#${d.id}`);

    node.append("text")
            .attr("dy", ".2em")
            .classed('node-icon', true)
            .style("text-anchor", "middle")
            .text(d => d.name)
            .attr("font-family", "sans-serif")
            .attr("font-size", function(d){
                    return d.value/1.3;

            })
            .attr("fill", "white");


    node.append('title')
      .text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

    let legendOrdinal = d3.legendColor()
      .scale(scaleColor)
      .shape('circle');


    let sizeScale = d3.scaleOrdinal()
        .domain(['less use', 'more use'])
        .range([5, 10] );

    let legendSize = d3.legendSize()
      .scale(sizeScale)
      .shape('circle')
      .shapePadding(10)
      .labelAlign('end');

    let legend2 = svg.append('g')
      .classed('legend-size', true)
      .attr('text-anchor', 'start')
      .attr('transform', 'translate(20, 30)')
      .style('font-size', '12px')
      .call(legendSize);

    let infoBox = node.append('foreignObject')
      .classed('circle-overlay hidden', true)
      .attr('x', -350 * 0.5 * 0.8)
      .attr('y', -350 * 0.5 * 0.8)
      .attr('height', 350 * 0.8)
      .attr('width', 350 * 0.8)
        .append('xhtml:div')
        .classed('circle-overlay__inner', true);

    infoBox.append('h2')
      .classed('circle-overlay__title', true)
      .text(d => d.name);

    infoBox.append('p')
      .classed('circle-overlay__body', true)
      .html(d => d.desc);


    node.on('click', (currentNode) => {
      d3.event.stopPropagation();
      console.log('currentNode', currentNode);
      let currentTarget = d3.event.currentTarget; // the <g> el

      if (currentNode === focusedNode) {
        // no focusedNode or same focused node is clicked
        return;
      }
      let lastNode = focusedNode;
      focusedNode = currentNode;

      simulation.alphaTarget(0.2).restart();
      // hide all circle-overlay
      d3.selectAll('.circle-overlay').classed('hidden', true);
      //d3.selectAll('.node-icon').classed('hidden', true);

      // don't fix last node to center anymore
      if (lastNode) {
        console.log('lastNode',lastNode)
        lastNode.fx = null;
        lastNode.fy = null;
        node.filter((d, i) => i === lastNode.index)
          .transition().duration(1500).ease(d3.easePolyOut)
          .tween('circleOut', () => {
            let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
            return (t) => {
              lastNode.r = irl(t);
            }
          })
          .on('interrupt', () => {
            lastNode.r = lastNode.radius;

          });
      d3.selectAll('.node-icon').classed('hidden', false);
      }

      // if (!d3.event.active) simulation.alphaTarget(0.5).restart();

      d3.transition().duration(1500).ease(d3.easePolyOut)
        .tween('moveIn', () => {
          console.log('tweenMoveIn', currentNode);
          let ix = d3.interpolateNumber(currentNode.x, centerX);
          let iy = d3.interpolateNumber(currentNode.y, centerY);
          let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
          return function (t) {
            // console.log('i', ix(t), iy(t));
            currentNode.fx = ix(t);
            currentNode.fy = iy(t);
            currentNode.r = ir(t);
            simulation.force('collide', forceCollide);
          };
        })
        .on('end', () => {
          simulation.alphaTarget(0);
          let $currentGroup = d3.select(currentTarget);
          $currentGroup.select('.circle-overlay')
            .classed('hidden', false);
          $currentGroup.select('.node-icon')
            .classed('hidden', true);

        })
        .on('interrupt', () => {
          console.log('move interrupt', currentNode);
          currentNode.fx = null;
          currentNode.fy = null;
          simulation.alphaTarget(0);
        });

    });

    // blur
    d3.select(document).on('click', () => {
      let target = d3.event.target;
      // check if click on document but not on the circle overlay
      if (!target.closest('#circle-overlay') && focusedNode) {
        focusedNode.fx = null;
        focusedNode.fy = null;
        simulation.alphaTarget(0.2).restart();
        d3.transition().duration(1500).ease(d3.easePolyOut)
          .tween('moveOut', function () {
            console.log('tweenMoveOut', focusedNode);
            let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
            return function (t) {
              focusedNode.r = ir(t);
              simulation.force('collide', forceCollide);
            };
          })
          .on('end', () => {
    
            focusedNode = null;
            simulation.alphaTarget(0);
        
          })
          .on('interrupt', () => {
            simulation.alphaTarget(0);

          });

        // hide all circle-overlay
        d3.selectAll('.circle-overlay').classed('hidden', true);
        d3.selectAll('.node-icon').classed('hidden', false);
      }
    });

    function ticked() {
      node
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .select('circle')
          .attr('r', d => d.r);
    }
}



function clearall(){
	changeColumnVisiblity("visibility-class","hidden")
}


/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

$(".dropdown dt a").on('click', function() {
  $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function() {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function() {

  var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
    title = $(this).val() + ",";
    swapColumnVisiblity($(this).val())

  if ($(this).is(':checked')) {
    var html = '<span title="' + title + '">' + title + '</span>';
    $('.multiSel').append(html);
    $(".hida").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida");
    $('.dropdown dt a').append(ret);

  }
});


      var e = document.getElementById("selected");
      map_name = category+"_map";
      var businessName = e.options[e.selectedIndex].text;
      var businessId = eval(map_name).get(businessName);

      var text_string = "Of course that’s your contention. You’re a first year grad student. You just got finished readin’ some Marxian historian, Pete Garrison probably. You’re gonna be convinced of that ’til next month when you get to James Lemon and then you’re gonna be talkin’ about how the economies of Virginia and Pennsylvania were entrepreneurial and capitalist way back in 1740. That’s gonna last until next year. You’re gonna be in here regurgitating Gordon Wood, talkin’ about, you know, the Pre-Revolutionary utopia and the capital-forming effects of military mobilization… ‘Wood drastically underestimates the impact of social distinctions predicated upon wealth, especially inherited wealth.’ You got that from Vickers, Work in Essex County, page 98, right? Yeah, I read that, too. Were you gonna plagiarize the whole thing for us? Do you have any thoughts of your own on this matter? Or do you, is that your thing? You come into a bar. You read some obscure passage and then pretend, you pawn it off as your own, as your own idea just to impress some girls and embarrass my friend? See, the sad thing about a guy like you is in 50 years, you’re gonna start doin’ some thinkin’ on your own and you’re gonna come up with the fact that there are two certainties in life. One: don’t do that. And two: you dropped a hundred and fifty grand on a fuckin’ education you coulda got for a dollar fifty in late charges at the public library.";
      //var fs = require('fs');
      //var textByLine = fs.readFileSync('dancers.txt').toString().split("\n");

      drawWordCloud(text_string);

      function drawWordCloud(text_string){
        var common = "poop,i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall,you're";


        var positive_words = ['a+', 'abound', 'abounds', 'abundance', 'abundant', 'accessable', 'accessible', 'acclaim', 'acclaimed', 'acclamation', 'accolade', 'accolades', 'accommodative', 'accomodative', 'accomplish', 'accomplished', 'accomplishment', 'accomplishments', 'accurate', 'accurately', 'achievable', 'achievement', 'achievements', 'achievible', 'acumen', 'adaptable', 'adaptive', 'adequate', 'adjustable', 'admirable', 'admirably', 'admiration', 'admire', 'admirer', 'admiring', 'admiringly', 'adorable', 'adore', 'adored', 'adorer', 'adoring', 'adoringly', 'adroit', 'adroitly', 'adulate', 'adulation', 'adulatory', 'advanced', 'advantage', 'advantageous', 'advantageously', 'advantages', 'adventuresome', 'adventurous', 'advocate', 'advocated', 'advocates', 'affability', 'affable', 'affably', 'affectation', 'affection', 'affectionate', 'affinity', 'affirm', 'affirmation', 'affirmative', 'affluence', 'affluent', 'afford', 'affordable', 'affordably', 'afordable', 'agile', 'agilely', 'agility', 'agreeable', 'agreeableness', 'agreeably', 'all-around', 'alluring', 'alluringly', 'altruistic', 'altruistically', 'amaze', 'amazed', 'amazement', 'amazes', 'amazing', 'amazingly', 'ambitious', 'ambitiously', 'ameliorate', 'amenable', 'amenity', 'amiability', 'amiabily', 'amiable', 'amicability', 'amicable', 'amicably', 'amity', 'ample', 'amply', 'amuse', 'amusing', 'amusingly', 'angel', 'angelic', 'apotheosis', 'appeal', 'appealing', 'applaud', 'appreciable', 'appreciate', 'appreciated', 'appreciates', 'appreciative', 'appreciatively', 'appropriate', 'approval', 'approve', 'ardent', 'ardently', 'ardor', 'articulate', 'aspiration', 'aspirations', 'aspire', 'assurance', 'assurances', 'assure', 'assuredly', 'assuring', 'astonish', 'astonished', 'astonishing', 'astonishingly', 'astonishment', 'astound', 'astounded', 'astounding', 'astoundingly', 'astutely', 'attentive', 'attraction', 'attractive', 'attractively', 'attune', 'audible', 'audibly', 'auspicious', 'authentic', 'authoritative', 'autonomous', 'available', 'aver', 'avid', 'avidly', 'award', 'awarded', 'awards', 'awe', 'awed', 'awesome', 'awesomely', 'awesomeness', 'awestruck', 'awsome', 'backbone', 'balanced', 'bargain', 'beauteous', 'beautiful', 'beautifullly', 'beautifully', 'beautify', 'beauty', 'beckon', 'beckoned', 'beckoning', 'beckons', 'believable', 'believeable', 'beloved', 'benefactor', 'beneficent', 'beneficial', 'beneficially', 'beneficiary', 'benefit', 'benefits', 'benevolence', 'benevolent', 'benifits', 'best', 'best-known', 'best-performing', 'best-selling', 'better', 'better-known', 'better-than-expected', 'beutifully', 'blameless', 'bless', 'blessing', 'bliss', 'blissful', 'blissfully', 'blithe', 'blockbuster', 'bloom', 'blossom', 'bolster', 'bonny', 'bonus', 'bonuses', 'boom', 'booming', 'boost', 'boundless', 'bountiful', 'brainiest', 'brainy', 'brand-new', 'brave', 'bravery', 'bravo', 'breakthrough', 'breakthroughs', 'breathlessness', 'breathtaking', 'breathtakingly', 'breeze', 'bright', 'brighten', 'brighter', 'brightest', 'brilliance', 'brilliances', 'brilliant', 'brilliantly', 'brisk', 'brotherly', 'bullish', 'buoyant', 'cajole', 'calm', 'calming', 'calmness', 'capability', 'capable', 'capably', 'captivate', 'captivating', 'carefree', 'cashback', 'cashbacks', 'catchy', 'celebrate', 'celebrated', 'celebration', 'celebratory', 'champ', 'champion', 'charisma', 'charismatic', 'charitable', 'charm', 'charming', 'charmingly', 'chaste', 'cheaper', 'cheapest', 'cheer', 'cheerful', 'cheery', 'cherish', 'cherished', 'cherub', 'chic', 'chivalrous', 'chivalry', 'civility', 'civilize', 'clarity', 'classic', 'classy', 'clean', 'cleaner', 'cleanest', 'cleanliness', 'cleanly', 'clear', 'clear-cut', 'cleared', 'clearer', 'clearly', 'clears', 'clever', 'cleverly', 'cohere', 'coherence', 'coherent', 'cohesive', 'colorful', 'comely', 'comfort', 'comfortable', 'comfortably', 'comforting', 'comfy', 'commend', 'commendable', 'commendably', 'commitment', 'commodious', 'compact', 'compactly', 'compassion', 'compassionate', 'compatible', 'competitive', 'complement', 'complementary', 'complemented', 'complements', 'compliant', 'compliment', 'complimentary', 'comprehensive', 'conciliate', 'conciliatory', 'concise', 'confidence', 'confident', 'congenial', 'congratulate', 'congratulation', 'congratulations', 'congratulatory', 'conscientious', 'considerate', 'consistent', 'consistently', 'constructive', 'consummate', 'contentment', 'continuity', 'contrasty', 'contribution', 'convenience', 'convenient', 'conveniently', 'convience', 'convienient', 'convient', 'convincing', 'convincingly', 'cool', 'coolest', 'cooperative', 'cooperatively', 'cornerstone', 'correct', 'correctly', 'cost-effective', 'cost-saving', 'counter-attack', 'counter-attacks', 'courage', 'courageous', 'courageously', 'courageousness', 'courteous', 'courtly', 'covenant', 'cozy', 'creative', 'credence', 'credible', 'crisp', 'crisper', 'cure', 'cure-all', 'cushy', 'cute', 'cuteness', 'danke', 'danken', 'daring', 'daringly', 'darling', 'dashing', 'dauntless', 'dawn', 'dazzle', 'dazzled', 'dazzling', 'dead-cheap', 'dead-on', 'decency', 'decent', 'decisive', 'decisiveness', 'dedicated', 'defeat', 'defeated', 'defeating', 'defeats', 'defender', 'deference', 'deft', 'deginified', 'delectable', 'delicacy', 'delicate', 'delicious', 'delight', 'delighted', 'delightful', 'delightfully', 'delightfulness', 'dependable', 'dependably', 'deservedly', 'deserving', 'desirable', 'desiring', 'desirous', 'destiny', 'detachable', 'devout', 'dexterous', 'dexterously', 'dextrous', 'dignified', 'dignify', 'dignity', 'diligence', 'diligent', 'diligently', 'diplomatic', 'dirt-cheap', 'distinction', 'distinctive', 'distinguished', 'diversified', 'divine', 'divinely', 'dominate', 'dominated', 'dominates', 'dote', 'dotingly', 'doubtless', 'dreamland', 'dumbfounded', 'dumbfounding', 'dummy-proof', 'durable', 'dynamic', 'eager', 'eagerly', 'eagerness', 'earnest', 'earnestly', 'earnestness', 'ease', 'eased', 'eases', 'easier', 'easiest', 'easiness', 'easing', 'easy', 'easy-to-use', 'easygoing', 'ebullience', 'ebullient', 'ebulliently', 'ecenomical', 'economical', 'ecstasies', 'ecstasy', 'ecstatic', 'ecstatically', 'edify', 'educated', 'effective', 'effectively', 'effectiveness', 'effectual', 'efficacious', 'efficient', 'efficiently', 'effortless', 'effortlessly', 'effusion', 'effusive', 'effusively', 'effusiveness', 'elan', 'elate', 'elated', 'elatedly', 'elation', 'electrify', 'elegance', 'elegant', 'elegantly', 'elevate', 'elite', 'eloquence', 'eloquent', 'eloquently', 'embolden', 'eminence', 'eminent', 'empathize', 'empathy', 'empower', 'empowerment', 'enchant', 'enchanted', 'enchanting', 'enchantingly', 'encourage', 'encouragement', 'encouraging', 'encouragingly', 'endear', 'endearing', 'endorse', 'endorsed', 'endorsement', 'endorses', 'endorsing', 'energetic', 'energize', 'energy-efficient', 'energy-saving', 'engaging', 'engrossing', 'enhance', 'enhanced', 'enhancement', 'enhances', 'enjoy', 'enjoyable', 'enjoyably', 'enjoyed', 'enjoying', 'enjoyment', 'enjoys', 'enlighten', 'enlightenment', 'enliven', 'ennoble', 'enough', 'enrapt', 'enrapture', 'enraptured', 'enrich', 'enrichment', 'enterprising', 'entertain', 'entertaining', 'entertains', 'enthral', 'enthrall', 'enthralled', 'enthuse', 'enthusiasm', 'enthusiast', 'enthusiastic', 'enthusiastically', 'entice', 'enticed', 'enticing', 'enticingly', 'entranced', 'entrancing', 'entrust', 'enviable', 'enviably', 'envious', 'enviously', 'enviousness', 'envy', 'equitable', 'ergonomical', 'err-free', 'erudite', 'ethical', 'eulogize', 'euphoria', 'euphoric', 'euphorically', 'evaluative', 'evenly', 'eventful', 'everlasting', 'evocative', 'exalt', 'exaltation', 'exalted', 'exaltedly', 'exalting', 'exaltingly', 'examplar', 'examplary', 'excallent', 'exceed', 'exceeded', 'exceeding', 'exceedingly', 'exceeds', 'excel', 'exceled', 'excelent', 'excellant', 'excelled', 'excellence', 'excellency', 'excellent', 'excellently', 'excels', 'exceptional', 'exceptionally', 'excite', 'excited', 'excitedly', 'excitedness', 'excitement', 'excites', 'exciting', 'excitingly', 'exellent', 'exemplar', 'exemplary', 'exhilarate', 'exhilarating', 'exhilaratingly', 'exhilaration', 'exonerate', 'expansive', 'expeditiously', 'expertly', 'exquisite', 'exquisitely', 'extol', 'extoll', 'extraordinarily', 'extraordinary', 'exuberance', 'exuberant', 'exuberantly', 'exult', 'exultant', 'exultation', 'exultingly', 'eye-catch', 'eye-catching', 'eyecatch', 'eyecatching', 'fabulous', 'fabulously', 'facilitate', 'fair', 'fairly', 'fairness', 'faith', 'faithful', 'faithfully', 'faithfulness', 'fame', 'famed', 'famous', 'famously', 'fancier', 'fancinating', 'fancy', 'fanfare', 'fans', 'fantastic', 'fantastically', 'fascinate', 'fascinating', 'fascinatingly', 'fascination', 'fashionable', 'fashionably', 'fast', 'fast-growing', 'fast-paced', 'faster', 'fastest', 'fastest-growing', 'faultless', 'fav', 'fave', 'favor', 'favorable', 'favored', 'favorite', 'favorited', 'favour', 'fearless', 'fearlessly', 'feasible', 'feasibly', 'feat', 'feature-rich', 'fecilitous', 'feisty', 'felicitate', 'felicitous', 'felicity', 'fertile', 'fervent', 'fervently', 'fervid', 'fervidly', 'fervor', 'festive', 'fidelity', 'fiery', 'fine', 'fine-looking', 'finely', 'finer', 'finest', 'firmer', 'first-class', 'first-in-class', 'first-rate', 'flashy', 'flatter', 'flattering', 'flatteringly', 'flawless', 'flawlessly', 'flexibility', 'flexible', 'flourish', 'flourishing', 'fluent', 'flutter', 'fond', 'fondly', 'fondness', 'foolproof', 'foremost', 'foresight', 'formidable', 'fortitude', 'fortuitous', 'fortuitously', 'fortunate', 'fortunately', 'fortune', 'fragrant', 'free', 'freed', 'freedom', 'freedoms', 'fresh', 'fresher', 'freshest', 'friendliness', 'friendly', 'frolic', 'frugal', 'fruitful', 'ftw', 'fulfillment', 'fun', 'futurestic', 'futuristic', 'gaiety', 'gaily', 'gain', 'gained', 'gainful', 'gainfully', 'gaining', 'gains', 'gallant', 'gallantly', 'galore', 'geekier', 'geeky', 'gem', 'gems', 'generosity', 'generous', 'generously', 'genial', 'genius', 'gentle', 'gentlest', 'genuine', 'gifted', 'glad', 'gladden', 'gladly', 'gladness', 'glamorous', 'glee', 'gleeful', 'gleefully', 'glimmer', 'glimmering', 'glisten', 'glistening', 'glitter', 'glitz', 'glorify', 'glorious', 'gloriously', 'glory', 'glow', 'glowing', 'glowingly', 'god-given', 'god-send', 'godlike', 'godsend', 'gold', 'golden', 'good', 'goodly', 'goodness', 'goodwill', 'goood', 'gooood', 'gorgeous', 'gorgeously', 'grace', 'graceful', 'gracefully', 'gracious', 'graciously', 'graciousness', 'grand', 'grandeur', 'grateful', 'gratefully', 'gratification', 'gratified', 'gratifies', 'gratify', 'gratifying', 'gratifyingly', 'gratitude', 'great', 'greatest', 'greatness', 'grin', 'groundbreaking', 'guarantee', 'guidance', 'guiltless', 'gumption', 'gush', 'gusto', 'gutsy', 'hail', 'halcyon', 'hale', 'hallmark', 'hallmarks', 'hallowed', 'handier', 'handily', 'hands-down', 'handsome', 'handsomely', 'handy', 'happier', 'happily', 'happiness', 'happy', 'hard-working', 'hardier', 'hardy', 'harmless', 'harmonious', 'harmoniously', 'harmonize', 'harmony', 'headway', 'heal', 'healthful', 'healthy', 'hearten', 'heartening', 'heartfelt', 'heartily', 'heartwarming', 'heaven', 'heavenly', 'helped', 'helpful', 'helping', 'hero', 'heroic', 'heroically', 'heroine', 'heroize', 'heros', 'high-quality', 'high-spirited', 'hilarious', 'holy', 'homage', 'honest', 'honesty', 'honor', 'honorable', 'honored', 'honoring', 'hooray', 'hopeful', 'hospitable', 'hot', 'hotcake', 'hotcakes', 'hottest', 'hug', 'humane', 'humble', 'humility', 'humor', 'humorous', 'humorously', 'humour', 'humourous', 'ideal', 'idealize', 'ideally', 'idol', 'idolize', 'idolized', 'idyllic', 'illuminate', 'illuminati', 'illuminating', 'illumine', 'illustrious', 'ilu', 'imaculate', 'imaginative', 'immaculate', 'immaculately', 'immense', 'impartial', 'impartiality', 'impartially', 'impassioned', 'impeccable', 'impeccably', 'important', 'impress', 'impressed', 'impresses', 'impressive', 'impressively', 'impressiveness', 'improve', 'improved', 'improvement', 'improvements', 'improves', 'improving', 'incredible', 'incredibly', 'indebted', 'individualized', 'indulgence', 'indulgent', 'industrious', 'inestimable', 'inestimably', 'inexpensive', 'infallibility', 'infallible', 'infallibly', 'influential', 'ingenious', 'ingeniously', 'ingenuity', 'ingenuous', 'ingenuously', 'innocuous', 'innovation', 'innovative', 'inpressed', 'insightful', 'insightfully', 'inspiration', 'inspirational', 'inspire', 'inspiring', 'instantly', 'instructive', 'instrumental', 'integral', 'integrated', 'intelligence', 'intelligent', 'intelligible', 'interesting', 'interests', 'intimacy', 'intimate', 'intricate', 'intrigue', 'intriguing', 'intriguingly', 'intuitive', 'invaluable', 'invaluablely', 'inventive', 'invigorate', 'invigorating', 'invincibility', 'invincible', 'inviolable', 'inviolate', 'invulnerable', 'irreplaceable', 'irreproachable', 'irresistible', 'irresistibly', 'issue-free', 'jaw-droping', 'jaw-dropping', 'jollify', 'jolly', 'jovial', 'joy', 'joyful', 'joyfully', 'joyous', 'joyously', 'jubilant', 'jubilantly', 'jubilate', 'jubilation', 'jubiliant', 'judicious', 'justly', 'keen', 'keenly', 'keenness', 'kid-friendly', 'kindliness', 'kindly', 'kindness', 'knowledgeable', 'kudos', 'large-capacity', 'laud', 'laudable', 'laudably', 'lavish', 'lavishly', 'law-abiding', 'lawful', 'lawfully', 'lead', 'leading', 'leads', 'lean', 'led', 'legendary', 'leverage', 'levity', 'liberate', 'liberation', 'liberty', 'lifesaver', 'light-hearted', 'lighter', 'likable', 'like', 'liked', 'likes', 'liking', 'lionhearted', 'lively', 'logical', 'long-lasting', 'lovable', 'lovably', 'love', 'loved', 'loveliness', 'lovely', 'lover', 'loves', 'loving', 'low-cost', 'low-price', 'low-priced', 'low-risk', 'lower-priced', 'loyal', 'loyalty', 'lucid', 'lucidly', 'luck', 'luckier', 'luckiest', 'luckiness', 'lucky', 'lucrative', 'luminous', 'lush', 'luster', 'lustrous', 'luxuriant', 'luxuriate', 'luxurious', 'luxuriously', 'luxury', 'lyrical', 'magic', 'magical', 'magnanimous', 'magnanimously', 'magnificence', 'magnificent', 'magnificently', 'majestic', 'majesty', 'manageable', 'maneuverable', 'marvel', 'marveled', 'marvelled', 'marvellous', 'marvelous', 'marvelously', 'marvelousness', 'marvels', 'master', 'masterful', 'masterfully', 'masterpiece', 'masterpieces', 'masters', 'mastery', 'matchless', 'mature', 'maturely', 'maturity', 'meaningful', 'memorable', 'merciful', 'mercifully', 'mercy', 'merit', 'meritorious', 'merrily', 'merriment', 'merriness', 'merry', 'mesmerize', 'mesmerized', 'mesmerizes', 'mesmerizing', 'mesmerizingly', 'meticulous', 'meticulously', 'mightily', 'mighty', 'mind-blowing', 'miracle', 'miracles', 'miraculous', 'miraculously', 'miraculousness', 'modern', 'modest', 'modesty', 'momentous', 'monumental', 'monumentally', 'morality', 'motivated', 'multi-purpose', 'navigable', 'neat', 'neatest', 'neatly', 'nice', 'nicely', 'nicer', 'nicest', 'nifty', 'nimble', 'noble', 'nobly', 'noiseless', 'non-violence', 'non-violent', 'notably', 'noteworthy', 'nourish', 'nourishing', 'nourishment', 'novelty', 'nurturing', 'oasis', 'obsession', 'obsessions', 'obtainable', 'openly', 'openness', 'optimal', 'optimism', 'optimistic', 'opulent', 'orderly', 'originality', 'outdo', 'outdone', 'outperform', 'outperformed', 'outperforming', 'outperforms', 'outshine', 'outshone', 'outsmart', 'outstanding', 'outstandingly', 'outstrip', 'outwit', 'ovation', 'overjoyed', 'overtake', 'overtaken', 'overtakes', 'overtaking', 'overtook', 'overture', 'pain-free', 'painless', 'painlessly', 'palatial', 'pamper', 'pampered', 'pamperedly', 'pamperedness', 'pampers', 'panoramic', 'paradise', 'paramount', 'pardon', 'passion', 'passionate', 'passionately', 'patience', 'patient', 'patiently', 'patriot', 'patriotic', 'peace', 'peaceable', 'peaceful', 'peacefully', 'peacekeepers', 'peach', 'peerless', 'pep', 'pepped', 'pepping', 'peppy', 'peps', 'perfect', 'perfection', 'perfectly', 'permissible', 'perseverance', 'persevere', 'personages', 'personalized', 'phenomenal', 'phenomenally', 'picturesque', 'piety', 'pinnacle', 'playful', 'playfully', 'pleasant', 'pleasantly', 'pleased', 'pleases', 'pleasing', 'pleasingly', 'pleasurable', 'pleasurably', 'pleasure', 'plentiful', 'pluses', 'plush', 'plusses', 'poetic', 'poeticize', 'poignant', 'poise', 'poised', 'polished', 'polite', 'politeness', 'popular', 'portable', 'posh', 'positive', 'positively', 'positives', 'powerful', 'powerfully', 'praise', 'praiseworthy', 'praising', 'pre-eminent', 'precious', 'precise', 'precisely', 'preeminent', 'prefer', 'preferable', 'preferably', 'prefered', 'preferes', 'preferring', 'prefers', 'premier', 'prestige', 'prestigious', 'prettily', 'pretty', 'priceless', 'pride', 'principled', 'privilege', 'privileged', 'prize', 'proactive', 'problem-free', 'problem-solver', 'prodigious', 'prodigiously', 'prodigy', 'productive', 'productively', 'proficient', 'proficiently', 'profound', 'profoundly', 'profuse', 'profusion', 'progress', 'progressive', 'prolific', 'prominence', 'prominent', 'promise', 'promised', 'promises', 'promising', 'promoter', 'prompt', 'promptly', 'proper', 'properly', 'propitious', 'propitiously', 'pros', 'prosper', 'prosperity', 'prosperous', 'prospros', 'protect', 'protection', 'protective', 'proud', 'proven', 'proves', 'providence', 'proving', 'prowess', 'prudence', 'prudent', 'prudently', 'punctual', 'pure', 'purify', 'purposeful', 'quaint', 'qualified', 'qualify', 'quicker', 'quiet', 'quieter', 'radiance', 'radiant', 'rapid', 'rapport', 'rapt', 'rapture', 'raptureous', 'raptureously', 'rapturous', 'rapturously', 'rational', 'razor-sharp', 'reachable', 'readable', 'readily', 'ready', 'reaffirm', 'reaffirmation', 'realistic', 'realizable', 'reasonable', 'reasonably', 'reasoned', 'reassurance', 'reassure', 'receptive', 'reclaim', 'recomend', 'recommend', 'recommendation', 'recommendations', 'recommended', 'reconcile', 'reconciliation', 'record-setting', 'recover', 'recovery', 'rectification', 'rectify', 'rectifying', 'redeem', 'redeeming', 'redemption', 'refine', 'refined', 'refinement', 'reform', 'reformed', 'reforming', 'reforms', 'refresh', 'refreshed', 'refreshing', 'refund', 'refunded', 'regal', 'regally', 'regard', 'rejoice', 'rejoicing', 'rejoicingly', 'rejuvenate', 'rejuvenated', 'rejuvenating', 'relaxed', 'relent', 'reliable', 'reliably', 'relief', 'relish', 'remarkable', 'remarkably', 'remedy', 'remission', 'remunerate', 'renaissance', 'renewed', 'renown', 'renowned', 'replaceable', 'reputable', 'reputation', 'resilient', 'resolute', 'resound', 'resounding', 'resourceful', 'resourcefulness', 'respect', 'respectable', 'respectful', 'respectfully', 'respite', 'resplendent', 'responsibly', 'responsive', 'restful', 'restored', 'restructure', 'restructured', 'restructuring', 'retractable', 'revel', 'revelation', 'revere', 'reverence', 'reverent', 'reverently', 'revitalize', 'revival', 'revive', 'revives', 'revolutionary', 'revolutionize', 'revolutionized', 'revolutionizes', 'reward', 'rewarding', 'rewardingly', 'rich', 'richer', 'richly', 'richness', 'right', 'righten', 'righteous', 'righteously', 'righteousness', 'rightful', 'rightfully', 'rightly', 'rightness', 'risk-free', 'robust', 'rock-star', 'rock-stars', 'rockstar', 'rockstars', 'romantic', 'romantically', 'romanticize', 'roomier', 'roomy', 'rosy', 'safe', 'safely', 'sagacity', 'sagely', 'saint', 'saintliness', 'saintly', 'salutary', 'salute', 'sane', 'satisfactorily', 'satisfactory', 'satisfied', 'satisfies', 'satisfy', 'satisfying', 'satisified', 'saver', 'savings', 'savior', 'savvy', 'scenic', 'seamless', 'seasoned', 'secure', 'securely', 'selective', 'self-determination', 'self-respect', 'self-satisfaction', 'self-sufficiency', 'self-sufficient', 'sensation', 'sensational', 'sensationally', 'sensations', 'sensible', 'sensibly', 'sensitive', 'serene', 'serenity', 'sexy', 'sharp', 'sharper', 'sharpest', 'shimmering', 'shimmeringly', 'shine', 'shiny', 'significant', 'silent', 'simpler', 'simplest', 'simplified', 'simplifies', 'simplify', 'simplifying', 'sincere', 'sincerely', 'sincerity', 'skill', 'skilled', 'skillful', 'skillfully', 'slammin', 'sleek', 'slick', 'smart', 'smarter', 'smartest', 'smartly', 'smile', 'smiles', 'smiling', 'smilingly', 'smitten', 'smooth', 'smoother', 'smoothes', 'smoothest', 'smoothly', 'snappy', 'snazzy', 'sociable', 'soft', 'softer', 'solace', 'solicitous', 'solicitously', 'solid', 'solidarity', 'soothe', 'soothingly', 'sophisticated', 'soulful', 'soundly', 'soundness', 'spacious', 'sparkle', 'sparkling', 'spectacular', 'spectacularly', 'speedily', 'speedy', 'spellbind', 'spellbinding', 'spellbindingly', 'spellbound', 'spirited', 'spiritual', 'splendid', 'splendidly', 'splendor', 'spontaneous', 'sporty', 'spotless', 'sprightly', 'stability', 'stabilize', 'stable', 'stainless', 'standout', 'state-of-the-art', 'stately', 'statuesque', 'staunch', 'staunchly', 'staunchness', 'steadfast', 'steadfastly', 'steadfastness', 'steadiest', 'steadiness', 'steady', 'stellar', 'stellarly', 'stimulate', 'stimulates', 'stimulating', 'stimulative', 'stirringly', 'straighten', 'straightforward', 'streamlined', 'striking', 'strikingly', 'striving', 'strong', 'stronger', 'strongest', 'stunned', 'stunning', 'stunningly', 'stupendous', 'stupendously', 'sturdier', 'sturdy', 'stylish', 'stylishly', 'stylized', 'suave', 'suavely', 'sublime', 'subsidize', 'subsidized', 'subsidizes', 'subsidizing', 'substantive', 'succeed', 'succeeded', 'succeeding', 'succeeds', 'succes', 'success', 'successes', 'successful', 'successfully', 'suffice', 'sufficed', 'suffices', 'sufficient', 'sufficiently', 'suitable', 'sumptuous', 'sumptuously', 'sumptuousness', 'super', 'superb', 'superbly', 'superior', 'superiority', 'supple', 'support', 'supported', 'supporter', 'supporting', 'supportive', 'supports', 'supremacy', 'supreme', 'supremely', 'supurb', 'supurbly', 'surmount', 'surpass', 'surreal', 'survival', 'survivor', 'sustainability', 'sustainable', 'swank', 'swankier', 'swankiest', 'swanky', 'sweeping', 'sweet', 'sweeten', 'sweetheart', 'sweetly', 'sweetness', 'swift', 'swiftness', 'talent', 'talented', 'talents', 'tantalize', 'tantalizing', 'tantalizingly', 'tempt', 'tempting', 'temptingly', 'tenacious', 'tenaciously', 'tenacity', 'tender', 'tenderly', 'terrific', 'terrifically', 'thank', 'thankful', 'thinner', 'thoughtful', 'thoughtfully', 'thoughtfulness', 'thrift', 'thrifty', 'thrill', 'thrilled', 'thrilling', 'thrillingly', 'thrills', 'thrive', 'thriving', 'thumb-up', 'thumbs-up', 'tickle', 'tidy', 'time-honored', 'timely', 'tingle', 'titillate', 'titillating', 'titillatingly', 'togetherness', 'tolerable', 'toll-free', 'top', 'top-notch', 'top-quality', 'topnotch', 'tops', 'tough', 'tougher', 'toughest', 'traction', 'tranquil', 'tranquility', 'transparent', 'treasure', 'tremendously', 'trendy', 'triumph', 'triumphal', 'triumphant', 'triumphantly', 'trivially', 'trophy', 'trouble-free', 'trump', 'trumpet', 'trust', 'trusted', 'trusting', 'trustingly', 'trustworthiness', 'trustworthy', 'trusty', 'truthful', 'truthfully', 'truthfulness', 'twinkly', 'ultra-crisp', 'unabashed', 'unabashedly', 'unaffected', 'unassailable', 'unbeatable', 'unbiased', 'unbound', 'uncomplicated', 'unconditional', 'undamaged', 'undaunted', 'understandable', 'undisputable', 'undisputably', 'undisputed', 'unencumbered', 'unequivocal', 'unequivocally', 'unfazed', 'unfettered', 'unforgettable', 'unity', 'unlimited', 'unmatched', 'unparalleled', 'unquestionable', 'unquestionably', 'unreal', 'unrestricted', 'unrivaled', 'unselfish', 'unwavering', 'upbeat', 'upgradable', 'upgradeable', 'upgraded', 'upheld', 'uphold', 'uplift', 'uplifting', 'upliftingly', 'upliftment', 'upscale', 'usable', 'useable', 'useful', 'user-friendly', 'user-replaceable', 'valiant', 'valiantly', 'valor', 'valuable', 'variety', 'venerate', 'verifiable', 'veritable', 'versatile', 'versatility', 'vibrant', 'vibrantly', 'victorious', 'victory', 'viewable', 'vigilance', 'vigilant', 'virtue', 'virtuous', 'virtuously', 'visionary', 'vivacious', 'vivid', 'vouch', 'vouchsafe', 'warm', 'warmer', 'warmhearted', 'warmly', 'warmth', 'wealthy', 'welcome', 'well', 'well-backlit', 'well-balanced', 'well-behaved', 'well-being', 'well-bred', 'well-connected', 'well-educated', 'well-established', 'well-informed', 'well-intentioned', 'well-known', 'well-made', 'well-managed', 'well-mannered', 'well-positioned', 'well-received', 'well-regarded', 'well-rounded', 'well-run', 'well-wishers', 'wellbeing', 'whoa', 'wholeheartedly', 'wholesome', 'whooa', 'whoooa', 'wieldy', 'willing', 'willingly', 'willingness', 'win', 'windfall', 'winnable', 'winner', 'winners', 'winning', 'wins', 'wisdom', 'wise', 'wisely', 'witty', 'won', 'wonder', 'wonderful', 'wonderfully', 'wonderous', 'wonderously', 'wonders', 'wondrous', 'woo', 'work', 'workable', 'worked', 'works', 'world-famous', 'worth', 'worth-while', 'worthiness', 'worthwhile', 'worthy', 'wow', 'wowed', 'wowing', 'wows', 'yay', 'youthful', 'zeal', 'zenith', 'zest', 'zippy'];

        var negative_words = ['2-faced', '2-faces', 'abnormal', 'abolish', 'abominable', 'abominably', 'abominate', 'abomination', 'abort', 'aborted', 'aborts', 'abrade', 'abrasive', 'abrupt', 'abruptly', 'abscond', 'absence', 'absent-minded', 'absentee', 'absurd', 'absurdity', 'absurdly', 'absurdness', 'abuse', 'abused', 'abuses', 'abusive', 'abysmal', 'abysmally', 'abyss', 'accidental', 'accost', 'accursed', 'accusation', 'accusations', 'accuse', 'accuses', 'accusing', 'accusingly', 'acerbate', 'acerbic', 'acerbically', 'ache', 'ached', 'aches', 'achey', 'aching', 'acrid', 'acridly', 'acridness', 'acrimonious', 'acrimoniously', 'acrimony', 'adamant', 'adamantly', 'addict', 'addicted', 'addicting', 'addicts', 'admonish', 'admonisher', 'admonishingly', 'admonishment', 'admonition', 'adulterate', 'adulterated', 'adulteration', 'adulterier', 'adversarial', 'adversary', 'adverse', 'adversity', 'afflict', 'affliction', 'afflictive', 'affront', 'afraid', 'aggravate', 'aggravating', 'aggravation', 'aggression', 'aggressive', 'aggressiveness', 'aggressor', 'aggrieve', 'aggrieved', 'aggrivation', 'aghast', 'agonies', 'agonize', 'agonizing', 'agonizingly', 'agony', 'aground', 'ail', 'ailing', 'ailment', 'aimless', 'alarm', 'alarmed', 'alarming', 'alarmingly', 'alienate', 'alienated', 'alienation', 'allegation', 'allegations', 'allege', 'allergic', 'allergies', 'allergy', 'aloof', 'altercation', 'ambiguity', 'ambiguous', 'ambivalence', 'ambivalent', 'ambush', 'amiss', 'amputate', 'anarchism', 'anarchist', 'anarchistic', 'anarchy', 'anemic', 'anger', 'angrily', 'angriness', 'angry', 'anguish', 'animosity', 'annihilate', 'annihilation', 'annoy', 'annoyance', 'annoyances', 'annoyed', 'annoying', 'annoyingly', 'annoys', 'anomalous', 'anomaly', 'antagonism', 'antagonist', 'antagonistic', 'antagonize', 'anti-', 'anti-american', 'anti-israeli', 'anti-occupation', 'anti-proliferation', 'anti-semites', 'anti-social', 'anti-us', 'anti-white', 'antipathy', 'antiquated', 'antithetical', 'anxieties', 'anxiety', 'anxious', 'anxiously', 'anxiousness', 'apathetic', 'apathetically', 'apathy', 'apocalypse', 'apocalyptic', 'apologist', 'apologists', 'appal', 'appall', 'appalled', 'appalling', 'appallingly', 'apprehension', 'apprehensions', 'apprehensive', 'apprehensively', 'arbitrary', 'arcane', 'archaic', 'arduous', 'arduously', 'argumentative', 'arrogance', 'arrogant', 'arrogantly', 'ashamed', 'asinine', 'asininely', 'asinininity', 'askance', 'asperse', 'aspersion', 'aspersions', 'assail', 'assassin', 'assassinate', 'assault', 'assult', 'astray', 'asunder', 'atrocious', 'atrocities', 'atrocity', 'atrophy', 'attack', 'attacks', 'audacious', 'audaciously', 'audaciousness', 'audacity', 'audiciously', 'austere', 'authoritarian', 'autocrat', 'autocratic', 'avalanche', 'avarice', 'avaricious', 'avariciously', 'avenge', 'averse', 'aversion', 'aweful', 'awful', 'awfully', 'awfulness', 'awkward', 'awkwardness', 'ax', 'babble', 'back-logged', 'back-wood', 'back-woods', 'backache', 'backaches', 'backaching', 'backbite', 'backbiting', 'backward', 'backwardness', 'backwood', 'backwoods', 'bad', 'badly', 'baffle', 'baffled', 'bafflement', 'baffling', 'bait', 'balk', 'banal', 'banalize', 'bane', 'banish', 'banishment', 'bankrupt', 'barbarian', 'barbaric', 'barbarically', 'barbarity', 'barbarous', 'barbarously', 'barren', 'baseless', 'bash', 'bashed', 'bashful', 'bashing', 'bastard', 'bastards', 'battered', 'battering', 'batty', 'bearish', 'beastly', 'bedlam', 'bedlamite', 'befoul', 'beg', 'beggar', 'beggarly', 'begging', 'beguile', 'belabor', 'belated', 'beleaguer', 'belie', 'belittle', 'belittled', 'belittling', 'bellicose', 'belligerence', 'belligerent', 'belligerently', 'bemoan', 'bemoaning', 'bemused', 'bent', 'berate', 'bereave', 'bereavement', 'bereft', 'berserk', 'beseech', 'beset', 'besiege', 'besmirch', 'bestial', 'betray', 'betrayal', 'betrayals', 'betrayer', 'betraying', 'betrays', 'bewail', 'beware', 'bewilder', 'bewildered', 'bewildering', 'bewilderingly', 'bewilderment', 'bewitch', 'bias', 'biased', 'biases', 'bicker', 'bickering', 'bid-rigging', 'bigotries', 'bigotry', 'bitch', 'bitchy', 'biting', 'bitingly', 'bitter', 'bitterly', 'bitterness', 'bizarre', 'blab', 'blabber', 'blackmail', 'blah', 'blame', 'blameworthy', 'bland', 'blandish', 'blaspheme', 'blasphemous', 'blasphemy', 'blasted', 'blatant', 'blatantly', 'blather', 'bleak', 'bleakly', 'bleakness', 'bleed', 'bleeding', 'bleeds', 'blemish', 'blind', 'blinding', 'blindingly', 'blindside', 'blister', 'blistering', 'bloated', 'blockage', 'blockhead', 'bloodshed', 'bloodthirsty', 'bloody', 'blotchy', 'blow', 'blunder', 'blundering', 'blunders', 'blunt', 'blur', 'bluring', 'blurred', 'blurring', 'blurry', 'blurs', 'blurt', 'boastful', 'boggle', 'bogus', 'boil', 'boiling', 'boisterous', 'bomb', 'bombard', 'bombardment', 'bombastic', 'bondage', 'bonkers', 'bore', 'bored', 'boredom', 'bores', 'boring', 'botch', 'bother', 'bothered', 'bothering', 'bothers', 'bothersome', 'bowdlerize', 'boycott', 'braggart', 'bragger', 'brainless', 'brainwash', 'brash', 'brashly', 'brashness', 'brat', 'bravado', 'brazen', 'brazenly', 'brazenness', 'breach', 'break', 'break-up', 'break-ups', 'breakdown', 'breaking', 'breaks', 'breakup', 'breakups', 'bribery', 'brimstone', 'bristle', 'brittle', 'broke', 'broken', 'broken-hearted', 'brood', 'browbeat', 'bruise', 'bruised', 'bruises', 'bruising', 'brusque', 'brutal', 'brutalising', 'brutalities', 'brutality', 'brutalize', 'brutalizing', 'brutally', 'brute', 'brutish', 'bs', 'buckle', 'bug', 'bugging', 'buggy', 'bugs', 'bulkier', 'bulkiness', 'bulky', 'bulkyness', 'bull****', 'bull----', 'bullies', 'bullshit', 'bullshyt', 'bully', 'bullying', 'bullyingly', 'bum', 'bump', 'bumped', 'bumping', 'bumpping', 'bumps', 'bumpy', 'bungle', 'bungler', 'bungling', 'bunk', 'burden', 'burdensome', 'burdensomely', 'burn', 'burned', 'burning', 'burns', 'bust', 'busts', 'busybody', 'butcher', 'butchery', 'buzzing', 'byzantine', 'cackle', 'calamities', 'calamitous', 'calamitously', 'calamity', 'callous', 'calumniate', 'calumniation', 'calumnies', 'calumnious', 'calumniously', 'calumny', 'cancer', 'cancerous', 'cannibal', 'cannibalize', 'capitulate', 'capricious', 'capriciously', 'capriciousness', 'capsize', 'careless', 'carelessness', 'caricature', 'carnage', 'carp', 'cartoonish', 'cash-strapped', 'castigate', 'castrated', 'casualty', 'cataclysm', 'cataclysmal', 'cataclysmic', 'cataclysmically', 'catastrophe', 'catastrophes', 'catastrophic', 'catastrophically', 'catastrophies', 'caustic', 'caustically', 'cautionary', 'cave', 'censure', 'chafe', 'chaff', 'chagrin', 'challenging', 'chaos', 'chaotic', 'chasten', 'chastise', 'chastisement', 'chatter', 'chatterbox', 'cheap', 'cheapen', 'cheaply', 'cheat', 'cheated', 'cheater', 'cheating', 'cheats', 'checkered', 'cheerless', 'cheesy', 'chide', 'childish', 'chill', 'chilly', 'chintzy', 'choke', 'choleric', 'choppy', 'chore', 'chronic', 'chunky', 'clamor', 'clamorous', 'clash', 'cliche', 'cliched', 'clique', 'clog', 'clogged', 'clogs', 'cloud', 'clouding', 'cloudy', 'clueless', 'clumsy', 'clunky', 'coarse', 'cocky', 'coerce', 'coercion', 'coercive', 'cold', 'coldly', 'collapse', 'collude', 'collusion', 'combative', 'combust', 'comical', 'commiserate', 'commonplace', 'commotion', 'commotions', 'complacent', 'complain', 'complained', 'complaining', 'complains', 'complaint', 'complaints', 'complex', 'complicated', 'complication', 'complicit', 'compulsion', 'compulsive', 'concede', 'conceded', 'conceit', 'conceited', 'concen', 'concens', 'concern', 'concerned', 'concerns', 'concession', 'concessions', 'condemn', 'condemnable', 'condemnation', 'condemned', 'condemns', 'condescend', 'condescending', 'condescendingly', 'condescension', 'confess', 'confession', 'confessions', 'confined', 'conflict', 'conflicted', 'conflicting', 'conflicts', 'confound', 'confounded', 'confounding', 'confront', 'confrontation', 'confrontational', 'confuse', 'confused', 'confuses', 'confusing', 'confusion', 'confusions', 'congested', 'congestion', 'cons', 'conscons', 'conservative', 'conspicuous', 'conspicuously', 'conspiracies', 'conspiracy', 'conspirator', 'conspiratorial', 'conspire', 'consternation', 'contagious', 'contaminate', 'contaminated', 'contaminates', 'contaminating', 'contamination', 'contempt', 'contemptible', 'contemptuous', 'contemptuously', 'contend', 'contention', 'contentious', 'contort', 'contortions', 'contradict', 'contradiction', 'contradictory', 'contrariness', 'contravene', 'contrive', 'contrived', 'controversial', 'controversy', 'convoluted', 'corrode', 'corrosion', 'corrosions', 'corrosive', 'corrupt', 'corrupted', 'corrupting', 'corruption', 'corrupts', 'corruptted', 'costlier', 'costly', 'counter-productive', 'counterproductive', 'coupists', 'covetous', 'coward', 'cowardly', 'crabby', 'crack', 'cracked', 'cracks', 'craftily', 'craftly', 'crafty', 'cramp', 'cramped', 'cramping', 'cranky', 'crap', 'crappy', 'craps', 'crash', 'crashed', 'crashes', 'crashing', 'crass', 'craven', 'cravenly', 'craze', 'crazily', 'craziness', 'crazy', 'creak', 'creaking', 'creaks', 'credulous', 'creep', 'creeping', 'creeps', 'creepy', 'crept', 'crime', 'criminal', 'cringe', 'cringed', 'cringes', 'cripple', 'crippled', 'cripples', 'crippling', 'crisis', 'critic', 'critical', 'criticism', 'criticisms', 'criticize', 'criticized', 'criticizing', 'critics', 'cronyism', 'crook', 'crooked', 'crooks', 'crowded', 'crowdedness', 'crude', 'cruel', 'crueler', 'cruelest', 'cruelly', 'cruelness', 'cruelties', 'cruelty', 'crumble', 'crumbling', 'crummy', 'crumple', 'crumpled', 'crumples', 'crush', 'crushed', 'crushing', 'cry', 'culpable', 'culprit', 'cumbersome', 'cunt', 'cunts', 'cuplrit', 'curse', 'cursed', 'curses', 'curt', 'cuss', 'cussed', 'cutthroat', 'cynical', 'cynicism', 'd*mn', 'damage', 'damaged', 'damages', 'damaging', 'damn', 'damnable', 'damnably', 'damnation', 'damned', 'damning', 'damper', 'danger', 'dangerous', 'dangerousness', 'dark', 'darken', 'darkened', 'darker', 'darkness', 'dastard', 'dastardly', 'daunt', 'daunting', 'dauntingly', 'dawdle', 'daze', 'dazed', 'dead', 'deadbeat', 'deadlock', 'deadly', 'deadweight', 'deaf', 'dearth', 'death', 'debacle', 'debase', 'debasement', 'debaser', 'debatable', 'debauch', 'debaucher', 'debauchery', 'debilitate', 'debilitating', 'debility', 'debt', 'debts', 'decadence', 'decadent', 'decay', 'decayed', 'deceit', 'deceitful', 'deceitfully', 'deceitfulness', 'deceive', 'deceiver', 'deceivers', 'deceiving', 'deception', 'deceptive', 'deceptively', 'declaim', 'decline', 'declines', 'declining', 'decrement', 'decrepit', 'decrepitude', 'decry', 'defamation', 'defamations', 'defamatory', 'defame', 'defect', 'defective', 'defects', 'defensive', 'defiance', 'defiant', 'defiantly', 'deficiencies', 'deficiency', 'deficient', 'defile', 'defiler', 'deform', 'deformed', 'defrauding', 'defunct', 'defy', 'degenerate', 'degenerately', 'degeneration', 'degradation', 'degrade', 'degrading', 'degradingly', 'dehumanization', 'dehumanize', 'deign', 'deject', 'dejected', 'dejectedly', 'dejection', 'delay', 'delayed', 'delaying', 'delays', 'delinquency', 'delinquent', 'delirious', 'delirium', 'delude', 'deluded', 'deluge', 'delusion', 'delusional', 'delusions', 'demean', 'demeaning', 'demise', 'demolish', 'demolisher', 'demon', 'demonic', 'demonize', 'demonized', 'demonizes', 'demonizing', 'demoralize', 'demoralizing', 'demoralizingly', 'denial', 'denied', 'denies', 'denigrate', 'denounce', 'dense', 'dent', 'dented', 'dents', 'denunciate', 'denunciation', 'denunciations', 'deny', 'denying', 'deplete', 'deplorable', 'deplorably', 'deplore', 'deploring', 'deploringly', 'deprave', 'depraved', 'depravedly', 'deprecate', 'depress', 'depressed', 'depressing', 'depressingly', 'depression', 'depressions', 'deprive', 'deprived', 'deride', 'derision', 'derisive', 'derisively', 'derisiveness', 'derogatory', 'desecrate', 'desert', 'desertion', 'desiccate', 'desiccated', 'desititute', 'desolate', 'desolately', 'desolation', 'despair', 'despairing', 'despairingly', 'desperate', 'desperately', 'desperation', 'despicable', 'despicably', 'despise', 'despised', 'despoil', 'despoiler', 'despondence', 'despondency', 'despondent', 'despondently', 'despot', 'despotic', 'despotism', 'destabilisation', 'destains', 'destitute', 'destitution', 'destroy', 'destroyer', 'destruction', 'destructive', 'desultory', 'deter', 'deteriorate', 'deteriorating', 'deterioration', 'deterrent', 'detest', 'detestable', 'detestably', 'detested', 'detesting', 'detests', 'detract', 'detracted', 'detracting', 'detraction', 'detracts', 'detriment', 'detrimental', 'devastate', 'devastated', 'devastates', 'devastating', 'devastatingly', 'devastation', 'deviate', 'deviation', 'devil', 'devilish', 'devilishly', 'devilment', 'devilry', 'devious', 'deviously', 'deviousness', 'devoid', 'diabolic', 'diabolical', 'diabolically', 'diametrically', 'diappointed', 'diatribe', 'diatribes', 'dick', 'dictator', 'dictatorial', 'die', 'die-hard', 'died', 'dies', 'difficult', 'difficulties', 'difficulty', 'diffidence', 'dilapidated', 'dilemma', 'dilly-dally', 'dim', 'dimmer', 'din', 'ding', 'dings', 'dinky', 'dire', 'direly', 'direness', 'dirt', 'dirtbag', 'dirtbags', 'dirts', 'dirty', 'disable', 'disabled', 'disaccord', 'disadvantage', 'disadvantaged', 'disadvantageous', 'disadvantages', 'disaffect', 'disaffected', 'disaffirm', 'disagree', 'disagreeable', 'disagreeably', 'disagreed', 'disagreeing', 'disagreement', 'disagrees', 'disallow', 'disapointed', 'disapointing', 'disapointment', 'disappoint', 'disappointed', 'disappointing', 'disappointingly', 'disappointment', 'disappointments', 'disappoints', 'disapprobation', 'disapproval', 'disapprove', 'disapproving', 'disarm', 'disarray', 'disaster', 'disasterous', 'disastrous', 'disastrously', 'disavow', 'disavowal', 'disbelief', 'disbelieve', 'disbeliever', 'disclaim', 'discombobulate', 'discomfit', 'discomfititure', 'discomfort', 'discompose', 'disconcert', 'disconcerted', 'disconcerting', 'disconcertingly', 'disconsolate', 'disconsolately', 'disconsolation', 'discontent', 'discontented', 'discontentedly', 'discontinued', 'discontinuity', 'discontinuous', 'discord', 'discordance', 'discordant', 'discountenance', 'discourage', 'discouragement', 'discouraging', 'discouragingly', 'discourteous', 'discourteously', 'discoutinous', 'discredit', 'discrepant', 'discriminate', 'discrimination', 'discriminatory', 'disdain', 'disdained', 'disdainful', 'disdainfully', 'disfavor', 'disgrace', 'disgraced', 'disgraceful', 'disgracefully', 'disgruntle', 'disgruntled', 'disgust', 'disgusted', 'disgustedly', 'disgustful', 'disgustfully', 'disgusting', 'disgustingly', 'dishearten', 'disheartening', 'dishearteningly', 'dishonest', 'dishonestly', 'dishonesty', 'dishonor', 'dishonorable', 'dishonorablely', 'disillusion', 'disillusioned', 'disillusionment', 'disillusions', 'disinclination', 'disinclined', 'disingenuous', 'disingenuously', 'disintegrate', 'disintegrated', 'disintegrates', 'disintegration', 'disinterest', 'disinterested', 'dislike', 'disliked', 'dislikes', 'disliking', 'dislocated', 'disloyal', 'disloyalty', 'dismal', 'dismally', 'dismalness', 'dismay', 'dismayed', 'dismaying', 'dismayingly', 'dismissive', 'dismissively', 'disobedience', 'disobedient', 'disobey', 'disoobedient', 'disorder', 'disordered', 'disorderly', 'disorganized', 'disorient', 'disoriented', 'disown', 'disparage', 'disparaging', 'disparagingly', 'dispensable', 'dispirit', 'dispirited', 'dispiritedly', 'dispiriting', 'displace', 'displaced', 'displease', 'displeased', 'displeasing', 'displeasure', 'disproportionate', 'disprove', 'disputable', 'dispute', 'disputed', 'disquiet', 'disquieting', 'disquietingly', 'disquietude', 'disregard', 'disregardful', 'disreputable', 'disrepute', 'disrespect', 'disrespectable', 'disrespectablity', 'disrespectful', 'disrespectfully', 'disrespectfulness', 'disrespecting', 'disrupt', 'disruption', 'disruptive', 'diss', 'dissapointed', 'dissappointed', 'dissappointing', 'dissatisfaction', 'dissatisfactory', 'dissatisfied', 'dissatisfies', 'dissatisfy', 'dissatisfying', 'dissed', 'dissemble', 'dissembler', 'dissension', 'dissent', 'dissenter', 'dissention', 'disservice', 'disses', 'dissidence', 'dissident', 'dissidents', 'dissing', 'dissocial', 'dissolute', 'dissolution', 'dissonance', 'dissonant', 'dissonantly', 'dissuade', 'dissuasive', 'distains', 'distaste', 'distasteful', 'distastefully', 'distort', 'distorted', 'distortion', 'distorts', 'distract', 'distracting', 'distraction', 'distraught', 'distraughtly', 'distraughtness', 'distress', 'distressed', 'distressing', 'distressingly', 'distrust', 'distrustful', 'distrusting', 'disturb', 'disturbance', 'disturbed', 'disturbing', 'disturbingly', 'disunity', 'disvalue', 'divergent', 'divisive', 'divisively', 'divisiveness', 'dizzing', 'dizzingly', 'dizzy', 'doddering', 'dodgey', 'dogged', 'doggedly', 'dogmatic', 'doldrums', 'domineer', 'domineering', 'donside', 'doom', 'doomed', 'doomsday', 'dope', 'doubt', 'doubtful', 'doubtfully', 'doubts', 'douchbag', 'douchebag', 'douchebags', 'downbeat', 'downcast', 'downer', 'downfall', 'downfallen', 'downgrade', 'downhearted', 'downheartedly', 'downhill', 'downside', 'downsides', 'downturn', 'downturns', 'drab', 'draconian', 'draconic', 'drag', 'dragged', 'dragging', 'dragoon', 'drags', 'drain', 'drained', 'draining', 'drains', 'drastic', 'drastically', 'drawback', 'drawbacks', 'dread', 'dreadful', 'dreadfully', 'dreadfulness', 'dreary', 'dripped', 'dripping', 'drippy', 'drips', 'drones', 'droop', 'droops', 'drop-out', 'drop-outs', 'dropout', 'dropouts', 'drought', 'drowning', 'drunk', 'drunkard', 'drunken', 'dubious', 'dubiously', 'dubitable', 'dud', 'dull', 'dullard', 'dumb', 'dumbfound', 'dump', 'dumped', 'dumping', 'dumps', 'dunce', 'dungeon', 'dungeons', 'dupe', 'dust', 'dusty', 'dwindling', 'dying', 'earsplitting', 'eccentric', 'eccentricity', 'effigy', 'effrontery', 'egocentric', 'egomania', 'egotism', 'egotistical', 'egotistically', 'egregious', 'egregiously', 'election-rigger', 'elimination', 'emaciated', 'emasculate', 'embarrass', 'embarrassing', 'embarrassingly', 'embarrassment', 'embattled', 'embroil', 'embroiled', 'embroilment', 'emergency', 'emphatic', 'emphatically', 'emptiness', 'encroach', 'encroachment', 'endanger', 'enemies', 'enemy', 'enervate', 'enfeeble', 'enflame', 'engulf', 'enjoin', 'enmity', 'enrage', 'enraged', 'enraging', 'enslave', 'entangle', 'entanglement', 'entrap', 'entrapment', 'envious', 'enviously', 'enviousness', 'epidemic', 'equivocal', 'erase', 'erode', 'erodes', 'erosion', 'err', 'errant', 'erratic', 'erratically', 'erroneous', 'erroneously', 'error', 'errors', 'eruptions', 'escapade', 'eschew', 'estranged', 'evade', 'evasion', 'evasive', 'evil', 'evildoer', 'evils', 'eviscerate', 'exacerbate', 'exagerate', 'exagerated', 'exagerates', 'exaggerate', 'exaggeration', 'exasperate', 'exasperated', 'exasperating', 'exasperatingly', 'exasperation', 'excessive', 'excessively', 'exclusion', 'excoriate', 'excruciating', 'excruciatingly', 'excuse', 'excuses', 'execrate', 'exhaust', 'exhausted', 'exhaustion', 'exhausts', 'exhorbitant', 'exhort', 'exile', 'exorbitant', 'exorbitantance', 'exorbitantly', 'expel', 'expensive', 'expire', 'expired', 'explode', 'exploit', 'exploitation', 'explosive', 'expropriate', 'expropriation', 'expulse', 'expunge', 'exterminate', 'extermination', 'extinguish', 'extort', 'extortion', 'extraneous', 'extravagance', 'extravagant', 'extravagantly', 'extremism', 'extremist', 'extremists', 'eyesore', 'f**k', 'fabricate', 'fabrication', 'facetious', 'facetiously', 'fail', 'failed', 'failing', 'fails', 'failure', 'failures', 'faint', 'fainthearted', 'faithless', 'fake', 'fall', 'fallacies', 'fallacious', 'fallaciously', 'fallaciousness', 'fallacy', 'fallen', 'falling', 'fallout', 'falls', 'false', 'falsehood', 'falsely', 'falsify', 'falter', 'faltered', 'famine', 'famished', 'fanatic', 'fanatical', 'fanatically', 'fanaticism', 'fanatics', 'fanciful', 'far-fetched', 'farce', 'farcical', 'farcical-yet-provocative', 'farcically', 'farfetched', 'fascism', 'fascist', 'fastidious', 'fastidiously', 'fastuous', 'fat', 'fat-cat', 'fat-cats', 'fatal', 'fatalistic', 'fatalistically', 'fatally', 'fatcat', 'fatcats', 'fateful', 'fatefully', 'fathomless', 'fatigue', 'fatigued', 'fatique', 'fatty', 'fatuity', 'fatuous', 'fatuously', 'fault', 'faults', 'faulty', 'fawningly', 'faze', 'fear', 'fearful', 'fearfully', 'fears', 'fearsome', 'feckless', 'feeble', 'feeblely', 'feebleminded', 'feign', 'feint', 'fell', 'felon', 'felonious', 'ferociously', 'ferocity', 'fetid', 'fever', 'feverish', 'fevers', 'fiasco', 'fib', 'fibber', 'fickle', 'fiction', 'fictional', 'fictitious', 'fidget', 'fidgety', 'fiend', 'fiendish', 'fierce', 'figurehead', 'filth', 'filthy', 'finagle', 'finicky', 'fissures', 'fist', 'flabbergast', 'flabbergasted', 'flagging', 'flagrant', 'flagrantly', 'flair', 'flairs', 'flak', 'flake', 'flakey', 'flakieness', 'flaking', 'flaky', 'flare', 'flares', 'flareup', 'flareups', 'flat-out', 'flaunt', 'flaw', 'flawed', 'flaws', 'flee', 'fleed', 'fleeing', 'fleer', 'flees', 'fleeting', 'flicering', 'flicker', 'flickering', 'flickers', 'flighty', 'flimflam', 'flimsy', 'flirt', 'flirty', 'floored', 'flounder', 'floundering', 'flout', 'fluster', 'foe', 'fool', 'fooled', 'foolhardy', 'foolish', 'foolishly', 'foolishness', 'forbid', 'forbidden', 'forbidding', 'forceful', 'foreboding', 'forebodingly', 'forfeit', 'forged', 'forgetful', 'forgetfully', 'forgetfulness', 'forlorn', 'forlornly', 'forsake', 'forsaken', 'forswear', 'foul', 'foully', 'foulness', 'fractious', 'fractiously', 'fracture', 'fragile', 'fragmented', 'frail', 'frantic', 'frantically', 'franticly', 'fraud', 'fraudulent', 'fraught', 'frazzle', 'frazzled', 'freak', 'freaking', 'freakish', 'freakishly', 'freaks', 'freeze', 'freezes', 'freezing', 'frenetic', 'frenetically', 'frenzied', 'frenzy', 'fret', 'fretful', 'frets', 'friction', 'frictions', 'fried', 'friggin', 'frigging', 'fright', 'frighten', 'frightening', 'frighteningly', 'frightful', 'frightfully', 'frigid', 'frost', 'frown', 'froze', 'frozen', 'fruitless', 'fruitlessly', 'frustrate', 'frustrated', 'frustrates', 'frustrating', 'frustratingly', 'frustration', 'frustrations', 'fuck', 'fucking', 'fudge', 'fugitive', 'full-blown', 'fulminate', 'fumble', 'fume', 'fumes', 'fundamentalism', 'funky', 'funnily', 'funny', 'furious', 'furiously', 'furor', 'fury', 'fuss', 'fussy', 'fustigate', 'fusty', 'futile', 'futilely', 'futility', 'fuzzy', 'gabble', 'gaff', 'gaffe', 'gainsay', 'gainsayer', 'gall', 'galling', 'gallingly', 'galls', 'gangster', 'gape', 'garbage', 'garish', 'gasp', 'gauche', 'gaudy', 'gawk', 'gawky', 'geezer', 'genocide', 'get-rich', 'ghastly', 'ghetto', 'ghosting', 'gibber', 'gibberish', 'gibe', 'giddy', 'gimmick', 'gimmicked', 'gimmicking', 'gimmicks', 'gimmicky', 'glare', 'glaringly', 'glib', 'glibly', 'glitch', 'glitches', 'gloatingly', 'gloom', 'gloomy', 'glower', 'glum', 'glut', 'gnawing', 'goad', 'goading', 'god-awful', 'goof', 'goofy', 'goon', 'gossip', 'graceless', 'gracelessly', 'graft', 'grainy', 'grapple', 'grate', 'grating', 'gravely', 'greasy', 'greed', 'greedy', 'grief', 'grievance', 'grievances', 'grieve', 'grieving', 'grievous', 'grievously', 'grim', 'grimace', 'grind', 'gripe', 'gripes', 'grisly', 'gritty', 'gross', 'grossly', 'grotesque', 'grouch', 'grouchy', 'groundless', 'grouse', 'growl', 'grudge', 'grudges', 'grudging', 'grudgingly', 'gruesome', 'gruesomely', 'gruff', 'grumble', 'grumpier', 'grumpiest', 'grumpily', 'grumpish', 'grumpy', 'guile', 'guilt', 'guiltily', 'guilty', 'gullible', 'gutless', 'gutter', 'hack', 'hacks', 'haggard', 'haggle', 'hairloss', 'halfhearted', 'halfheartedly', 'hallucinate', 'hallucination', 'hamper', 'hampered', 'handicapped', 'hang', 'hangs', 'haphazard', 'hapless', 'harangue', 'harass', 'harassed', 'harasses', 'harassment', 'harboring', 'harbors', 'hard', 'hard-hit', 'hard-line', 'hard-liner', 'hardball', 'harden', 'hardened', 'hardheaded', 'hardhearted', 'hardliner', 'hardliners', 'hardship', 'hardships', 'harm', 'harmed', 'harmful', 'harms', 'harpy', 'harridan', 'harried', 'harrow', 'harsh', 'harshly', 'hasseling', 'hassle', 'hassled', 'hassles', 'haste', 'hastily', 'hasty', 'hate', 'hated', 'hateful', 'hatefully', 'hatefulness', 'hater', 'haters', 'hates', 'hating', 'hatred', 'haughtily', 'haughty', 'haunt', 'haunting', 'havoc', 'hawkish', 'haywire', 'hazard', 'hazardous', 'haze', 'hazy', 'head-aches', 'headache', 'headaches', 'heartbreaker', 'heartbreaking', 'heartbreakingly', 'heartless', 'heathen', 'heavy-handed', 'heavyhearted', 'heck', 'heckle', 'heckled', 'heckles', 'hectic', 'hedge', 'hedonistic', 'heedless', 'hefty', 'hegemonism', 'hegemonistic', 'hegemony', 'heinous', 'hell', 'hell-bent', 'hellion', 'hells', 'helpless', 'helplessly', 'helplessness', 'heresy', 'heretic', 'heretical', 'hesitant', 'hestitant', 'hideous', 'hideously', 'hideousness', 'high-priced', 'hiliarious', 'hinder', 'hindrance', 'hiss', 'hissed', 'hissing', 'ho-hum', 'hoard', 'hoax', 'hobble', 'hogs', 'hollow', 'hoodium', 'hoodwink', 'hooligan', 'hopeless', 'hopelessly', 'hopelessness', 'horde', 'horrendous', 'horrendously', 'horrible', 'horrid', 'horrific', 'horrified', 'horrifies', 'horrify', 'horrifying', 'horrifys', 'hostage', 'hostile', 'hostilities', 'hostility', 'hotbeds', 'hothead', 'hotheaded', 'hothouse', 'hubris', 'huckster', 'hum', 'humid', 'humiliate', 'humiliating', 'humiliation', 'humming', 'hung', 'hurt', 'hurted', 'hurtful', 'hurting', 'hurts', 'hustler', 'hype', 'hypocricy', 'hypocrisy', 'hypocrite', 'hypocrites', 'hypocritical', 'hypocritically', 'hysteria', 'hysteric', 'hysterical', 'hysterically', 'hysterics', 'idiocies', 'idiocy', 'idiot', 'idiotic', 'idiotically', 'idiots', 'idle', 'ignoble', 'ignominious', 'ignominiously', 'ignominy', 'ignorance', 'ignorant', 'ignore', 'ill-advised', 'ill-conceived', 'ill-defined', 'ill-designed', 'ill-fated', 'ill-favored', 'ill-formed', 'ill-mannered', 'ill-natured', 'ill-sorted', 'ill-tempered', 'ill-treated', 'ill-treatment', 'ill-usage', 'ill-used', 'illegal', 'illegally', 'illegitimate', 'illicit', 'illiterate', 'illness', 'illogic', 'illogical', 'illogically', 'illusion', 'illusions', 'illusory', 'imaginary', 'imbalance', 'imbecile', 'imbroglio', 'immaterial', 'immature', 'imminence', 'imminently', 'immobilized', 'immoderate', 'immoderately', 'immodest', 'immoral', 'immorality', 'immorally', 'immovable', 'impair', 'impaired', 'impasse', 'impatience', 'impatient', 'impatiently', 'impeach', 'impedance', 'impede', 'impediment', 'impending', 'impenitent', 'imperfect', 'imperfection', 'imperfections', 'imperfectly', 'imperialist', 'imperil', 'imperious', 'imperiously', 'impermissible', 'impersonal', 'impertinent', 'impetuous', 'impetuously', 'impiety', 'impinge', 'impious', 'implacable', 'implausible', 'implausibly', 'implicate', 'implication', 'implode', 'impolite', 'impolitely', 'impolitic', 'importunate', 'importune', 'impose', 'imposers', 'imposing', 'imposition', 'impossible', 'impossiblity', 'impossibly', 'impotent', 'impoverish', 'impoverished', 'impractical', 'imprecate', 'imprecise', 'imprecisely', 'imprecision', 'imprison', 'imprisonment', 'improbability', 'improbable', 'improbably', 'improper', 'improperly', 'impropriety', 'imprudence', 'imprudent', 'impudence', 'impudent', 'impudently', 'impugn', 'impulsive', 'impulsively', 'impunity', 'impure', 'impurity', 'inability', 'inaccuracies', 'inaccuracy', 'inaccurate', 'inaccurately', 'inaction', 'inactive', 'inadequacy', 'inadequate', 'inadequately', 'inadverent', 'inadverently', 'inadvisable', 'inadvisably', 'inane', 'inanely', 'inappropriate', 'inappropriately', 'inapt', 'inaptitude', 'inarticulate', 'inattentive', 'inaudible', 'incapable', 'incapably', 'incautious', 'incendiary', 'incense', 'incessant', 'incessantly', 'incite', 'incitement', 'incivility', 'inclement', 'incognizant', 'incoherence', 'incoherent', 'incoherently', 'incommensurate', 'incomparable', 'incomparably', 'incompatability', 'incompatibility', 'incompatible', 'incompetence', 'incompetent', 'incompetently', 'incomplete', 'incompliant', 'incomprehensible', 'incomprehension', 'inconceivable', 'inconceivably', 'incongruous', 'incongruously', 'inconsequent', 'inconsequential', 'inconsequentially', 'inconsequently', 'inconsiderate', 'inconsiderately', 'inconsistence', 'inconsistencies', 'inconsistency', 'inconsistent', 'inconsolable', 'inconsolably', 'inconstant', 'inconvenience', 'inconveniently', 'incorrect', 'incorrectly', 'incorrigible', 'incorrigibly', 'incredulous', 'incredulously', 'inculcate', 'indecency', 'indecent', 'indecently', 'indecision', 'indecisive', 'indecisively', 'indecorum', 'indefensible', 'indelicate', 'indeterminable', 'indeterminably', 'indeterminate', 'indifference', 'indifferent', 'indigent', 'indignant', 'indignantly', 'indignation', 'indignity', 'indiscernible', 'indiscreet', 'indiscreetly', 'indiscretion', 'indiscriminate', 'indiscriminately', 'indiscriminating', 'indistinguishable', 'indoctrinate', 'indoctrination', 'indolent', 'indulge', 'ineffective', 'ineffectively', 'ineffectiveness', 'ineffectual', 'ineffectually', 'ineffectualness', 'inefficacious', 'inefficacy', 'inefficiency', 'inefficient', 'inefficiently', 'inelegance', 'inelegant', 'ineligible', 'ineloquent', 'ineloquently', 'inept', 'ineptitude', 'ineptly', 'inequalities', 'inequality', 'inequitable', 'inequitably', 'inequities', 'inescapable', 'inescapably', 'inessential', 'inevitable', 'inevitably', 'inexcusable', 'inexcusably', 'inexorable', 'inexorably', 'inexperience', 'inexperienced', 'inexpert', 'inexpertly', 'inexpiable', 'inexplainable', 'inextricable', 'inextricably', 'infamous', 'infamously', 'infamy', 'infected', 'infection', 'infections', 'inferior', 'inferiority', 'infernal', 'infest', 'infested', 'infidel', 'infidels', 'infiltrator', 'infiltrators', 'infirm', 'inflame', 'inflammation', 'inflammatory', 'inflammed', 'inflated', 'inflationary', 'inflexible', 'inflict', 'infraction', 'infringe', 'infringement', 'infringements', 'infuriate', 'infuriated', 'infuriating', 'infuriatingly', 'inglorious', 'ingrate', 'ingratitude', 'inhibit', 'inhibition', 'inhospitable', 'inhospitality', 'inhuman', 'inhumane', 'inhumanity', 'inimical', 'inimically', 'iniquitous', 'iniquity', 'injudicious', 'injure', 'injurious', 'injury', 'injustice', 'injustices', 'innuendo', 'inoperable', 'inopportune', 'inordinate', 'inordinately', 'insane', 'insanely', 'insanity', 'insatiable', 'insecure', 'insecurity', 'insensible', 'insensitive', 'insensitively', 'insensitivity', 'insidious', 'insidiously', 'insignificance', 'insignificant', 'insignificantly', 'insincere', 'insincerely', 'insincerity', 'insinuate', 'insinuating', 'insinuation', 'insociable', 'insolence', 'insolent', 'insolently', 'insolvent', 'insouciance', 'instability', 'instable', 'instigate', 'instigator', 'instigators', 'insubordinate', 'insubstantial', 'insubstantially', 'insufferable', 'insufferably', 'insufficiency', 'insufficient', 'insufficiently', 'insular', 'insult', 'insulted', 'insulting', 'insultingly', 'insults', 'insupportable', 'insupportably', 'insurmountable', 'insurmountably', 'insurrection', 'intefere', 'inteferes', 'intense', 'interfere', 'interference', 'interferes', 'intermittent', 'interrupt', 'interruption', 'interruptions', 'intimidate', 'intimidating', 'intimidatingly', 'intimidation', 'intolerable', 'intolerablely', 'intolerance', 'intoxicate', 'intractable', 'intransigence', 'intransigent', 'intrude', 'intrusion', 'intrusive', 'inundate', 'inundated', 'invader', 'invalid', 'invalidate', 'invalidity', 'invasive', 'invective', 'inveigle', 'invidious', 'invidiously', 'invidiousness', 'invisible', 'involuntarily', 'involuntary', 'irascible', 'irate', 'irately', 'ire', 'irk', 'irked', 'irking', 'irks', 'irksome', 'irksomely', 'irksomeness', 'irksomenesses', 'ironic', 'ironical', 'ironically', 'ironies', 'irony', 'irragularity', 'irrational', 'irrationalities', 'irrationality', 'irrationally', 'irrationals', 'irreconcilable', 'irrecoverable', 'irrecoverableness', 'irrecoverablenesses', 'irrecoverably', 'irredeemable', 'irredeemably', 'irreformable', 'irregular', 'irregularity', 'irrelevance', 'irrelevant', 'irreparable', 'irreplacible', 'irrepressible', 'irresolute', 'irresolvable', 'irresponsible', 'irresponsibly', 'irretating', 'irretrievable', 'irreversible', 'irritable', 'irritably', 'irritant', 'irritate', 'irritated', 'irritating', 'irritation', 'irritations', 'isolate', 'isolated', 'isolation', 'issue', 'issues', 'itch', 'itching', 'itchy', 'jabber', 'jaded', 'jagged', 'jam', 'jarring', 'jaundiced', 'jealous', 'jealously', 'jealousness', 'jealousy', 'jeer', 'jeering', 'jeeringly', 'jeers', 'jeopardize', 'jeopardy', 'jerk', 'jerky', 'jitter', 'jitters', 'jittery', 'job-killing', 'jobless', 'joke', 'joker', 'jolt', 'judder', 'juddering', 'judders', 'jumpy', 'junk', 'junky', 'junkyard', 'jutter', 'jutters', 'kaput', 'kill', 'killed', 'killer', 'killing', 'killjoy', 'kills', 'knave', 'knife', 'knock', 'knotted', 'kook', 'kooky', 'lack', 'lackadaisical', 'lacked', 'lackey', 'lackeys', 'lacking', 'lackluster', 'lacks', 'laconic', 'lag', 'lagged', 'lagging', 'laggy', 'lags', 'laid-off', 'lambast', 'lambaste', 'lame', 'lame-duck', 'lament', 'lamentable', 'lamentably', 'languid', 'languish', 'languor', 'languorous', 'languorously', 'lanky', 'lapse', 'lapsed', 'lapses', 'lascivious', 'last-ditch', 'latency', 'laughable', 'laughably', 'laughingstock', 'lawbreaker', 'lawbreaking', 'lawless', 'lawlessness', 'layoff', 'layoff-happy', 'lazy', 'leak', 'leakage', 'leakages', 'leaking', 'leaks', 'leaky', 'lech', 'lecher', 'lecherous', 'lechery', 'leech', 'leer', 'leery', 'left-leaning', 'lemon', 'lengthy', 'less-developed', 'lesser-known', 'letch', 'lethal', 'lethargic', 'lethargy', 'lewd', 'lewdly', 'lewdness', 'liability', 'liable', 'liar', 'liars', 'licentious', 'licentiously', 'licentiousness', 'lie', 'lied', 'lier', 'lies', 'life-threatening', 'lifeless', 'limit', 'limitation', 'limitations', 'limited', 'limits', 'limp', 'listless', 'litigious', 'little-known', 'livid', 'lividly', 'loath', 'loathe', 'loathing', 'loathly', 'loathsome', 'loathsomely', 'lone', 'loneliness', 'lonely', 'loner', 'lonesome', 'long-time', 'long-winded', 'longing', 'longingly', 'loophole', 'loopholes', 'loose', 'loot', 'lorn', 'lose', 'loser', 'losers', 'loses', 'losing', 'loss', 'losses', 'lost', 'loud', 'louder', 'lousy', 'loveless', 'lovelorn', 'low-rated', 'lowly', 'ludicrous', 'ludicrously', 'lugubrious', 'lukewarm', 'lull', 'lumpy', 'lunatic', 'lunaticism', 'lurch', 'lure', 'lurid', 'lurk', 'lurking', 'lying', 'macabre', 'mad', 'madden', 'maddening', 'maddeningly', 'madder', 'madly', 'madman', 'madness', 'maladjusted', 'maladjustment', 'malady', 'malaise', 'malcontent', 'malcontented', 'maledict', 'malevolence', 'malevolent', 'malevolently', 'malice', 'malicious', 'maliciously', 'maliciousness', 'malign', 'malignant', 'malodorous', 'maltreatment', 'mangle', 'mangled', 'mangles', 'mangling', 'mania', 'maniac', 'maniacal', 'manic', 'manipulate', 'manipulation', 'manipulative', 'manipulators', 'mar', 'marginal', 'marginally', 'martyrdom', 'martyrdom-seeking', 'mashed', 'massacre', 'massacres', 'matte', 'mawkish', 'mawkishly', 'mawkishness', 'meager', 'meaningless', 'meanness', 'measly', 'meddle', 'meddlesome', 'mediocre', 'mediocrity', 'melancholy', 'melodramatic', 'melodramatically', 'meltdown', 'menace', 'menacing', 'menacingly', 'mendacious', 'mendacity', 'menial', 'merciless', 'mercilessly', 'mess', 'messed', 'messes', 'messing', 'messy', 'midget', 'miff', 'militancy', 'mindless', 'mindlessly', 'mirage', 'mire', 'misalign', 'misaligned', 'misaligns', 'misapprehend', 'misbecome', 'misbecoming', 'misbegotten', 'misbehave', 'misbehavior', 'miscalculate', 'miscalculation', 'miscellaneous', 'mischief', 'mischievous', 'mischievously', 'misconception', 'misconceptions', 'miscreant', 'miscreants', 'misdirection', 'miser', 'miserable', 'miserableness', 'miserably', 'miseries', 'miserly', 'misery', 'misfit', 'misfortune', 'misgiving', 'misgivings', 'misguidance', 'misguide', 'misguided', 'mishandle', 'mishap', 'misinform', 'misinformed', 'misinterpret', 'misjudge', 'misjudgment', 'mislead', 'misleading', 'misleadingly', 'mislike', 'mismanage', 'mispronounce', 'mispronounced', 'mispronounces', 'misread', 'misreading', 'misrepresent', 'misrepresentation', 'miss', 'missed', 'misses', 'misstatement', 'mist', 'mistake', 'mistaken', 'mistakenly', 'mistakes', 'mistified', 'mistress', 'mistrust', 'mistrustful', 'mistrustfully', 'mists', 'misunderstand', 'misunderstanding', 'misunderstandings', 'misunderstood', 'misuse', 'moan', 'mobster', 'mock', 'mocked', 'mockeries', 'mockery', 'mocking', 'mockingly', 'mocks', 'molest', 'molestation', 'monotonous', 'monotony', 'monster', 'monstrosities', 'monstrosity', 'monstrous', 'monstrously', 'moody', 'moot', 'mope', 'morbid', 'morbidly', 'mordant', 'mordantly', 'moribund', 'moron', 'moronic', 'morons', 'mortification', 'mortified', 'mortify', 'mortifying', 'motionless', 'motley', 'mourn', 'mourner', 'mournful', 'mournfully', 'muddle', 'muddy', 'mudslinger', 'mudslinging', 'mulish', 'multi-polarization', 'mundane', 'murder', 'murderer', 'murderous', 'murderously', 'murky', 'muscle-flexing', 'mushy', 'musty', 'mysterious', 'mysteriously', 'mystery', 'mystify', 'myth', 'nag', 'nagging', 'naive', 'naively', 'narrower', 'nastily', 'nastiness', 'nasty', 'naughty', 'nauseate', 'nauseates', 'nauseating', 'nauseatingly', 'na\xc3\xafve', 'nebulous', 'nebulously', 'needless', 'needlessly', 'needy', 'nefarious', 'nefariously', 'negate', 'negation', 'negative', 'negatives', 'negativity', 'neglect', 'neglected', 'negligence', 'negligent', 'nemesis', 'nepotism', 'nervous', 'nervously', 'nervousness', 'nettle', 'nettlesome', 'neurotic', 'neurotically', 'niggle', 'niggles', 'nightmare', 'nightmarish', 'nightmarishly', 'nitpick', 'nitpicking', 'noise', 'noises', 'noisier', 'noisy', 'non-confidence', 'nonexistent', 'nonresponsive', 'nonsense', 'nosey', 'notoriety', 'notorious', 'notoriously', 'noxious', 'nuisance', 'numb', 'obese', 'object', 'objection', 'objectionable', 'objections', 'oblique', 'obliterate', 'obliterated', 'oblivious', 'obnoxious', 'obnoxiously', 'obscene', 'obscenely', 'obscenity', 'obscure', 'obscured', 'obscures', 'obscurity', 'obsess', 'obsessive', 'obsessively', 'obsessiveness', 'obsolete', 'obstacle', 'obstinate', 'obstinately', 'obstruct', 'obstructed', 'obstructing', 'obstruction', 'obstructs', 'obtrusive', 'obtuse', 'occlude', 'occluded', 'occludes', 'occluding', 'odd', 'odder', 'oddest', 'oddities', 'oddity', 'oddly', 'odor', 'offence', 'offend', 'offender', 'offending', 'offenses', 'offensive', 'offensively', 'offensiveness', 'officious', 'ominous', 'ominously', 'omission', 'omit', 'one-sided', 'onerous', 'onerously', 'onslaught', 'opinionated', 'opponent', 'opportunistic', 'oppose', 'opposition', 'oppositions', 'oppress', 'oppression', 'oppressive', 'oppressively', 'oppressiveness', 'oppressors', 'ordeal', 'orphan', 'ostracize', 'outbreak', 'outburst', 'outbursts', 'outcast', 'outcry', 'outlaw', 'outmoded', 'outrage', 'outraged', 'outrageous', 'outrageously', 'outrageousness', 'outrages', 'outsider', 'over-acted', 'over-awe', 'over-balanced', 'over-hyped', 'over-priced', 'over-valuation', 'overact', 'overacted', 'overawe', 'overbalance', 'overbalanced', 'overbearing', 'overbearingly', 'overblown', 'overdo', 'overdone', 'overdue', 'overemphasize', 'overheat', 'overkill', 'overloaded', 'overlook', 'overpaid', 'overpayed', 'overplay', 'overpower', 'overpriced', 'overrated', 'overreach', 'overrun', 'overshadow', 'oversight', 'oversights', 'oversimplification', 'oversimplified', 'oversimplify', 'oversize', 'overstate', 'overstated', 'overstatement', 'overstatements', 'overstates', 'overtaxed', 'overthrow', 'overthrows', 'overturn', 'overweight', 'overwhelm', 'overwhelmed', 'overwhelming', 'overwhelmingly', 'overwhelms', 'overzealous', 'overzealously', 'overzelous', 'pain', 'painful', 'painfull', 'painfully', 'pains', 'pale', 'pales', 'paltry', 'pan', 'pandemonium', 'pander', 'pandering', 'panders', 'panic', 'panick', 'panicked', 'panicking', 'panicky', 'paradoxical', 'paradoxically', 'paralize', 'paralyzed', 'paranoia', 'paranoid', 'parasite', 'pariah', 'parody', 'partiality', 'partisan', 'partisans', 'passe', 'passive', 'passiveness', 'pathetic', 'pathetically', 'patronize', 'paucity', 'pauper', 'paupers', 'payback', 'peculiar', 'peculiarly', 'pedantic', 'peeled', 'peeve', 'peeved', 'peevish', 'peevishly', 'penalize', 'penalty', 'perfidious', 'perfidity', 'perfunctory', 'peril', 'perilous', 'perilously', 'perish', 'pernicious', 'perplex', 'perplexed', 'perplexing', 'perplexity', 'persecute', 'persecution', 'pertinacious', 'pertinaciously', 'pertinacity', 'perturb', 'perturbed', 'pervasive', 'perverse', 'perversely', 'perversion', 'perversity', 'pervert', 'perverted', 'perverts', 'pessimism', 'pessimistic', 'pessimistically', 'pest', 'pestilent', 'petrified', 'petrify', 'pettifog', 'petty', 'phobia', 'phobic', 'phony', 'picket', 'picketed', 'picketing', 'pickets', 'picky', 'pig', 'pigs', 'pillage', 'pillory', 'pimple', 'pinch', 'pique', 'pitiable', 'pitiful', 'pitifully', 'pitiless', 'pitilessly', 'pittance', 'pity', 'plagiarize', 'plague', 'plasticky', 'plaything', 'plea', 'pleas', 'plebeian', 'plight', 'plot', 'plotters', 'ploy', 'plunder', 'plunderer', 'pointless', 'pointlessly', 'poison', 'poisonous', 'poisonously', 'pokey', 'poky', 'polarisation', 'polemize', 'pollute', 'polluter', 'polluters', 'polution', 'pompous', 'poor', 'poorer', 'poorest', 'poorly', 'posturing', 'pout', 'poverty', 'powerless', 'prate', 'pratfall', 'prattle', 'precarious', 'precariously', 'precipitate', 'precipitous', 'predatory', 'predicament', 'prejudge', 'prejudice', 'prejudices', 'prejudicial', 'premeditated', 'preoccupy', 'preposterous', 'preposterously', 'presumptuous', 'presumptuously', 'pretence', 'pretend', 'pretense', 'pretentious', 'pretentiously', 'prevaricate', 'pricey', 'pricier', 'prick', 'prickle', 'prickles', 'prideful', 'prik', 'primitive', 'prison', 'prisoner', 'problem', 'problematic', 'problems', 'procrastinate', 'procrastinates', 'procrastination', 'profane', 'profanity', 'prohibit', 'prohibitive', 'prohibitively', 'propaganda', 'propagandize', 'proprietary', 'prosecute', 'protest', 'protested', 'protesting', 'protests', 'protracted', 'provocation', 'provocative', 'provoke', 'pry', 'pugnacious', 'pugnaciously', 'pugnacity', 'punch', 'punish', 'punishable', 'punitive', 'punk', 'puny', 'puppet', 'puppets', 'puzzled', 'puzzlement', 'puzzling', 'quack', 'qualm', 'qualms', 'quandary', 'quarrel', 'quarrellous', 'quarrellously', 'quarrels', 'quarrelsome', 'quash', 'queer', 'questionable', 'quibble', 'quibbles', 'quitter', 'rabid', 'racism', 'racist', 'racists', 'racy', 'radical', 'radicalization', 'radically', 'radicals', 'rage', 'ragged', 'raging', 'rail', 'raked', 'rampage', 'rampant', 'ramshackle', 'rancor', 'randomly', 'rankle', 'rant', 'ranted', 'ranting', 'rantingly', 'rants', 'rape', 'raped', 'raping', 'rascal', 'rascals', 'rash', 'rattle', 'rattled', 'rattles', 'ravage', 'raving', 'reactionary', 'rebellious', 'rebuff', 'rebuke', 'recalcitrant', 'recant', 'recession', 'recessionary', 'reckless', 'recklessly', 'recklessness', 'recoil', 'recourses', 'redundancy', 'redundant', 'refusal', 'refuse', 'refused', 'refuses', 'refusing', 'refutation', 'refute', 'refuted', 'refutes', 'refuting', 'regress', 'regression', 'regressive', 'regret', 'regreted', 'regretful', 'regretfully', 'regrets', 'regrettable', 'regrettably', 'regretted', 'reject', 'rejected', 'rejecting', 'rejection', 'rejects', 'relapse', 'relentless', 'relentlessly', 'relentlessness', 'reluctance', 'reluctant', 'reluctantly', 'remorse', 'remorseful', 'remorsefully', 'remorseless', 'remorselessly', 'remorselessness', 'renounce', 'renunciation', 'repel', 'repetitive', 'reprehensible', 'reprehensibly', 'reprehension', 'reprehensive', 'repress', 'repression', 'repressive', 'reprimand', 'reproach', 'reproachful', 'reprove', 'reprovingly', 'repudiate', 'repudiation', 'repugn', 'repugnance', 'repugnant', 'repugnantly', 'repulse', 'repulsed', 'repulsing', 'repulsive', 'repulsively', 'repulsiveness', 'resent', 'resentful', 'resentment', 'resignation', 'resigned', 'resistance', 'restless', 'restlessness', 'restrict', 'restricted', 'restriction', 'restrictive', 'resurgent', 'retaliate', 'retaliatory', 'retard', 'retarded', 'retardedness', 'retards', 'reticent', 'retract', 'retreat', 'retreated', 'revenge', 'revengeful', 'revengefully', 'revert', 'revile', 'reviled', 'revoke', 'revolt', 'revolting', 'revoltingly', 'revulsion', 'revulsive', 'rhapsodize', 'rhetoric', 'rhetorical', 'ricer', 'ridicule', 'ridicules', 'ridiculous', 'ridiculously', 'rife', 'rift', 'rifts', 'rigid', 'rigidity', 'rigidness', 'rile', 'riled', 'rip', 'rip-off', 'ripoff', 'ripped', 'risk', 'risks', 'risky', 'rival', 'rivalry', 'roadblocks', 'rocky', 'rogue', 'rollercoaster', 'rot', 'rotten', 'rough', 'rremediable', 'rubbish', 'rude', 'rue', 'ruffian', 'ruffle', 'ruin', 'ruined', 'ruining', 'ruinous', 'ruins', 'rumbling', 'rumor', 'rumors', 'rumours', 'rumple', 'run-down', 'runaway', 'rupture', 'rust', 'rusts', 'rusty', 'rut', 'ruthless', 'ruthlessly', 'ruthlessness', 'ruts', 'sabotage', 'sack', 'sacrificed', 'sad', 'sadden', 'sadly', 'sadness', 'sag', 'sagged', 'sagging', 'saggy', 'sags', 'salacious', 'sanctimonious', 'sap', 'sarcasm', 'sarcastic', 'sarcastically', 'sardonic', 'sardonically', 'sass', 'satirical', 'satirize', 'savage', 'savaged', 'savagery', 'savages', 'scaly', 'scam', 'scams', 'scandal', 'scandalize', 'scandalized', 'scandalous', 'scandalously', 'scandals', 'scandel', 'scandels', 'scant', 'scapegoat', 'scar', 'scarce', 'scarcely', 'scarcity', 'scare', 'scared', 'scarier', 'scariest', 'scarily', 'scarred', 'scars', 'scary', 'scathing', 'scathingly', 'sceptical', 'scoff', 'scoffingly', 'scold', 'scolded', 'scolding', 'scoldingly', 'scorching', 'scorchingly', 'scorn', 'scornful', 'scornfully', 'scoundrel', 'scourge', 'scowl', 'scramble', 'scrambled', 'scrambles', 'scrambling', 'scrap', 'scratch', 'scratched', 'scratches', 'scratchy', 'scream', 'screech', 'screw-up', 'screwed', 'screwed-up', 'screwy', 'scuff', 'scuffs', 'scum', 'scummy', 'second-class', 'second-tier', 'secretive', 'sedentary', 'seedy', 'seethe', 'seething', 'self-coup', 'self-criticism', 'self-defeating', 'self-destructive', 'self-humiliation', 'self-interest', 'self-interested', 'self-serving', 'selfinterested', 'selfish', 'selfishly', 'selfishness', 'semi-retarded', 'senile', 'sensationalize', 'senseless', 'senselessly', 'seriousness', 'sermonize', 'servitude', 'set-up', 'setback', 'setbacks', 'sever', 'severe', 'severity', 'sh*t', 'shabby', 'shadowy', 'shady', 'shake', 'shaky', 'shallow', 'sham', 'shambles', 'shame', 'shameful', 'shamefully', 'shamefulness', 'shameless', 'shamelessly', 'shamelessness', 'shark', 'sharply', 'shatter', 'shemale', 'shimmer', 'shimmy', 'shipwreck', 'shirk', 'shirker', 'shit', 'shiver', 'shock', 'shocked', 'shocking', 'shockingly', 'shoddy', 'short-lived', 'shortage', 'shortchange', 'shortcoming', 'shortcomings', 'shortness', 'shortsighted', 'shortsightedness', 'showdown', 'shrew', 'shriek', 'shrill', 'shrilly', 'shrivel', 'shroud', 'shrouded', 'shrug', 'shun', 'shunned', 'sick', 'sicken', 'sickening', 'sickeningly', 'sickly', 'sickness', 'sidetrack', 'sidetracked', 'siege', 'sillily', 'silly', 'simplistic', 'simplistically', 'sin', 'sinful', 'sinfully', 'sinister', 'sinisterly', 'sink', 'sinking', 'skeletons', 'skeptic', 'skeptical', 'skeptically', 'skepticism', 'sketchy', 'skimpy', 'skinny', 'skittish', 'skittishly', 'skulk', 'slack', 'slander', 'slanderer', 'slanderous', 'slanderously', 'slanders', 'slap', 'slashing', 'slaughter', 'slaughtered', 'slave', 'slaves', 'sleazy', 'slime', 'slog', 'slogged', 'slogging', 'slogs', 'sloooooooooooooow', 'sloooow', 'slooow', 'sloow', 'sloppily', 'sloppy', 'sloth', 'slothful', 'slow', 'slow-moving', 'slowed', 'slower', 'slowest', 'slowly', 'sloww', 'slowww', 'slowwww', 'slug', 'sluggish', 'slump', 'slumping', 'slumpping', 'slur', 'slut', 'sluts', 'sly', 'smack', 'smallish', 'smash', 'smear', 'smell', 'smelled', 'smelling', 'smells', 'smelly', 'smelt', 'smoke', 'smokescreen', 'smolder', 'smoldering', 'smother', 'smoulder', 'smouldering', 'smudge', 'smudged', 'smudges', 'smudging', 'smug', 'smugly', 'smut', 'smuttier', 'smuttiest', 'smutty', 'snag', 'snagged', 'snagging', 'snags', 'snappish', 'snappishly', 'snare', 'snarky', 'snarl', 'sneak', 'sneakily', 'sneaky', 'sneer', 'sneering', 'sneeringly', 'snob', 'snobbish', 'snobby', 'snobish', 'snobs', 'snub', 'so-cal', 'soapy', 'sob', 'sober', 'sobering', 'solemn', 'solicitude', 'somber', 'sore', 'sorely', 'soreness', 'sorrow', 'sorrowful', 'sorrowfully', 'sorry', 'sour', 'sourly', 'spade', 'spank', 'spendy', 'spew', 'spewed', 'spewing', 'spews', 'spilling', 'spinster', 'spiritless', 'spite', 'spiteful', 'spitefully', 'spitefulness', 'splatter', 'split', 'splitting', 'spoil', 'spoilage', 'spoilages', 'spoiled', 'spoilled', 'spoils', 'spook', 'spookier', 'spookiest', 'spookily', 'spooky', 'spoon-fed', 'spoon-feed', 'spoonfed', 'sporadic', 'spotty', 'spurious', 'spurn', 'sputter', 'squabble', 'squabbling', 'squander', 'squash', 'squeak', 'squeaks', 'squeaky', 'squeal', 'squealing', 'squeals', 'squirm', 'stab', 'stagnant', 'stagnate', 'stagnation', 'staid', 'stain', 'stains', 'stale', 'stalemate', 'stall', 'stalls', 'stammer', 'stampede', 'standstill', 'stark', 'starkly', 'startle', 'startling', 'startlingly', 'starvation', 'starve', 'static', 'steal', 'stealing', 'steals', 'steep', 'steeply', 'stench', 'stereotype', 'stereotypical', 'stereotypically', 'stern', 'stew', 'sticky', 'stiff', 'stiffness', 'stifle', 'stifling', 'stiflingly', 'stigma', 'stigmatize', 'sting', 'stinging', 'stingingly', 'stingy', 'stink', 'stinks', 'stodgy', 'stole', 'stolen', 'stooge', 'stooges', 'stormy', 'straggle', 'straggler', 'strain', 'strained', 'straining', 'strange', 'strangely', 'stranger', 'strangest', 'strangle', 'streaky', 'strenuous', 'stress', 'stresses', 'stressful', 'stressfully', 'stricken', 'strict', 'strictly', 'strident', 'stridently', 'strife', 'strike', 'stringent', 'stringently', 'struck', 'struggle', 'struggled', 'struggles', 'struggling', 'strut', 'stubborn', 'stubbornly', 'stubbornness', 'stuck', 'stuffy', 'stumble', 'stumbled', 'stumbles', 'stump', 'stumped', 'stumps', 'stun', 'stunt', 'stunted', 'stupid', 'stupidest', 'stupidity', 'stupidly', 'stupified', 'stupify', 'stupor', 'stutter', 'stuttered', 'stuttering', 'stutters', 'sty', 'stymied', 'sub-par', 'subdued', 'subjected', 'subjection', 'subjugate', 'subjugation', 'submissive', 'subordinate', 'subpoena', 'subpoenas', 'subservience', 'subservient', 'substandard', 'subtract', 'subversion', 'subversive', 'subversively', 'subvert', 'succumb', 'suck', 'sucked', 'sucker', 'sucks', 'sucky', 'sue', 'sued', 'sueing', 'sues', 'suffer', 'suffered', 'sufferer', 'sufferers', 'suffering', 'suffers', 'suffocate', 'sugar-coat', 'sugar-coated', 'sugarcoated', 'suicidal', 'suicide', 'sulk', 'sullen', 'sully', 'sunder', 'sunk', 'sunken', 'superficial', 'superficiality', 'superficially', 'superfluous', 'superstition', 'superstitious', 'suppress', 'suppression', 'surrender', 'susceptible', 'suspect', 'suspicion', 'suspicions', 'suspicious', 'suspiciously', 'swagger', 'swamped', 'sweaty', 'swelled', 'swelling', 'swindle', 'swipe', 'swollen', 'symptom', 'symptoms', 'syndrome', 'taboo', 'tacky', 'taint', 'tainted', 'tamper', 'tangle', 'tangled', 'tangles', 'tank', 'tanked', 'tanks', 'tantrum', 'tardy', 'tarnish', 'tarnished', 'tarnishes', 'tarnishing', 'tattered', 'taunt', 'taunting', 'tauntingly', 'taunts', 'taut', 'tawdry', 'taxing', 'tease', 'teasingly', 'tedious', 'tediously', 'temerity', 'temper', 'tempest', 'temptation', 'tenderness', 'tense', 'tension', 'tentative', 'tentatively', 'tenuous', 'tenuously', 'tepid', 'terrible', 'terribleness', 'terribly', 'terror', 'terror-genic', 'terrorism', 'terrorize', 'testily', 'testy', 'tetchily', 'tetchy', 'thankless', 'thicker', 'thirst', 'thorny', 'thoughtless', 'thoughtlessly', 'thoughtlessness', 'thrash', 'threat', 'threaten', 'threatening', 'threats', 'threesome', 'throb', 'throbbed', 'throbbing', 'throbs', 'throttle', 'thug', 'thumb-down', 'thumbs-down', 'thwart', 'time-consuming', 'timid', 'timidity', 'timidly', 'timidness', 'tin-y', 'tingled', 'tingling', 'tired', 'tiresome', 'tiring', 'tiringly', 'toil', 'toll', 'top-heavy', 'topple', 'torment', 'tormented', 'torrent', 'tortuous', 'torture', 'tortured', 'tortures', 'torturing', 'torturous', 'torturously', 'totalitarian', 'touchy', 'toughness', 'tout', 'touted', 'touts', 'toxic', 'traduce', 'tragedy', 'tragic', 'tragically', 'traitor', 'traitorous', 'traitorously', 'tramp', 'trample', 'transgress', 'transgression', 'trap', 'traped', 'trapped', 'trash', 'trashed', 'trashy', 'trauma', 'traumatic', 'traumatically', 'traumatize', 'traumatized', 'travesties', 'travesty', 'treacherous', 'treacherously', 'treachery', 'treason', 'treasonous', 'trick', 'tricked', 'trickery', 'tricky', 'trivial', 'trivialize', 'trouble', 'troubled', 'troublemaker', 'troubles', 'troublesome', 'troublesomely', 'troubling', 'troublingly', 'truant', 'tumble', 'tumbled', 'tumbles', 'tumultuous', 'turbulent', 'turmoil', 'twist', 'twisted', 'twists', 'two-faced', 'two-faces', 'tyrannical', 'tyrannically', 'tyranny', 'tyrant', 'ugh', 'uglier', 'ugliest', 'ugliness', 'ugly', 'ulterior', 'ultimatum', 'ultimatums', 'ultra-hardline', 'un-viewable', 'unable', 'unacceptable', 'unacceptablely', 'unacceptably', 'unaccessible', 'unaccustomed', 'unachievable', 'unaffordable', 'unappealing', 'unattractive', 'unauthentic', 'unavailable', 'unavoidably', 'unbearable', 'unbearablely', 'unbelievable', 'unbelievably', 'uncaring', 'uncertain', 'uncivil', 'uncivilized', 'unclean', 'unclear', 'uncollectible', 'uncomfortable', 'uncomfortably', 'uncomfy', 'uncompetitive', 'uncompromising', 'uncompromisingly', 'unconfirmed', 'unconstitutional', 'uncontrolled', 'unconvincing', 'unconvincingly', 'uncooperative', 'uncouth', 'uncreative', 'undecided', 'undefined', 'undependability', 'undependable', 'undercut', 'undercuts', 'undercutting', 'underdog', 'underestimate', 'underlings', 'undermine', 'undermined', 'undermines', 'undermining', 'underpaid', 'underpowered', 'undersized', 'undesirable', 'undetermined', 'undid', 'undignified', 'undissolved', 'undocumented', 'undone', 'undue', 'unease', 'uneasily', 'uneasiness', 'uneasy', 'uneconomical', 'unemployed', 'unequal', 'unethical', 'uneven', 'uneventful', 'unexpected', 'unexpectedly', 'unexplained', 'unfairly', 'unfaithful', 'unfaithfully', 'unfamiliar', 'unfavorable', 'unfeeling', 'unfinished', 'unfit', 'unforeseen', 'unforgiving', 'unfortunate', 'unfortunately', 'unfounded', 'unfriendly', 'unfulfilled', 'unfunded', 'ungovernable', 'ungrateful', 'unhappily', 'unhappiness', 'unhappy', 'unhealthy', 'unhelpful', 'unilateralism', 'unimaginable', 'unimaginably', 'unimportant', 'uninformed', 'uninsured', 'unintelligible', 'unintelligile', 'unipolar', 'unjust', 'unjustifiable', 'unjustifiably', 'unjustified', 'unjustly', 'unkind', 'unkindly', 'unknown', 'unlamentable', 'unlamentably', 'unlawful', 'unlawfully', 'unlawfulness', 'unleash', 'unlicensed', 'unlikely', 'unlucky', 'unmoved', 'unnatural', 'unnaturally', 'unnecessary', 'unneeded', 'unnerve', 'unnerved', 'unnerving', 'unnervingly', 'unnoticed', 'unobserved', 'unorthodox', 'unorthodoxy', 'unpleasant', 'unpleasantries', 'unpopular', 'unpredictable', 'unprepared', 'unproductive', 'unprofitable', 'unprove', 'unproved', 'unproven', 'unproves', 'unproving', 'unqualified', 'unravel', 'unraveled', 'unreachable', 'unreadable', 'unrealistic', 'unreasonable', 'unreasonably', 'unrelenting', 'unrelentingly', 'unreliability', 'unreliable', 'unresolved', 'unresponsive', 'unrest', 'unruly', 'unsafe', 'unsatisfactory', 'unsavory', 'unscrupulous', 'unscrupulously', 'unsecure', 'unseemly', 'unsettle', 'unsettled', 'unsettling', 'unsettlingly', 'unskilled', 'unsophisticated', 'unsound', 'unspeakable', 'unspeakablely', 'unspecified', 'unstable', 'unsteadily', 'unsteadiness', 'unsteady', 'unsuccessful', 'unsuccessfully', 'unsupported', 'unsupportive', 'unsure', 'unsuspecting', 'unsustainable', 'untenable', 'untested', 'unthinkable', 'unthinkably', 'untimely', 'untouched', 'untrue', 'untrustworthy', 'untruthful', 'unusable', 'unusably', 'unuseable', 'unuseably', 'unusual', 'unusually', 'unviewable', 'unwanted', 'unwarranted', 'unwatchable', 'unwelcome', 'unwell', 'unwieldy', 'unwilling', 'unwillingly', 'unwillingness', 'unwise', 'unwisely', 'unworkable', 'unworthy', 'unyielding', 'upbraid', 'upheaval', 'uprising', 'uproar', 'uproarious', 'uproariously', 'uproarous', 'uproarously', 'uproot', 'upset', 'upseting', 'upsets', 'upsetting', 'upsettingly', 'urgent', 'useless', 'usurp', 'usurper', 'utterly', 'vagrant', 'vague', 'vagueness', 'vain', 'vainly', 'vanity', 'vehement', 'vehemently', 'vengeance', 'vengeful', 'vengefully', 'vengefulness', 'venom', 'venomous', 'venomously', 'vent', 'vestiges', 'vex', 'vexation', 'vexing', 'vexingly', 'vibrate', 'vibrated', 'vibrates', 'vibrating', 'vibration', 'vice', 'vicious', 'viciously', 'viciousness', 'victimize', 'vile', 'vileness', 'vilify', 'villainous', 'villainously', 'villains', 'villian', 'villianous', 'villianously', 'villify', 'vindictive', 'vindictively', 'vindictiveness', 'violate', 'violation', 'violator', 'violators', 'violent', 'violently', 'viper', 'virulence', 'virulent', 'virulently', 'virus', 'vociferous', 'vociferously', 'volatile', 'volatility', 'vomit', 'vomited', 'vomiting', 'vomits', 'vulgar', 'vulnerable', 'wack', 'wail', 'wallow', 'wane', 'waning', 'wanton', 'war-like', 'warily', 'wariness', 'warlike', 'warned', 'warning', 'warp', 'warped', 'wary', 'washed-out', 'waste', 'wasted', 'wasteful', 'wastefulness', 'wasting', 'water-down', 'watered-down', 'wayward', 'weak', 'weaken', 'weakening', 'weaker', 'weakness', 'weaknesses', 'weariness', 'wearisome', 'weary', 'wedge', 'weed', 'weep', 'weird', 'weirdly', 'wheedle', 'whimper', 'whine', 'whining', 'whiny', 'whips', 'whore', 'whores', 'wicked', 'wickedly', 'wickedness', 'wild', 'wildly', 'wiles', 'wilt', 'wily', 'wimpy', 'wince', 'wobble', 'wobbled', 'wobbles', 'woe', 'woebegone', 'woeful', 'woefully', 'womanizer', 'womanizing', 'worn', 'worried', 'worriedly', 'worrier', 'worries', 'worrisome', 'worry', 'worrying', 'worryingly', 'worse', 'worsen', 'worsening', 'worst', 'worthless', 'worthlessly', 'worthlessness', 'wound', 'wounds', 'wrangle', 'wrath', 'wreak', 'wreaked', 'wreaks', 'wreck', 'wrest', 'wrestle', 'wretch', 'wretched', 'wretchedly', 'wretchedness', 'wrinkle', 'wrinkled', 'wrinkles', 'wrip', 'wripped', 'wripping', 'writhe', 'wrong', 'wrongful', 'wrongly', 'wrought', 'yawn', 'zap', 'zapped', 'zaps', 'zealot', 'zealous', 'zealously', 'zombie'];
var word_count = {};

        var words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
          if (words.length == 1){
            word_count[words[0]] = 1;
          } else {
            words.forEach(function(word){
              var word = word.toLowerCase();
              if (word != "" && common.indexOf(word)==-1 && word.length>1){
                if (word_count[word]){
                  word_count[word]++;
                } else {
                  word_count[word] = 1;
                }
              }
            })
          }

        var svg_location = "#chart";
        var width = 960;
        var height = 500;

        var fill = d3v3.scale.category20();

        var word_entries = d3.entries(word_count);

        var xScale = d3v3.scale.linear()
           .domain([0, d3.max(word_entries, function(d) {
              return d.value;
            })
           ])
           .range([10,100]);

		    var positive_count=0;
		  var negative_count=0;
        
        cloud().size([width, height])
          .timeInterval(20)
          .words(word_entries)
          .fontSize(function(d) { return xScale(+d.value); })
          .text(function(d) { return d.key; })
          .rotate(function() { return ~~(Math.random() * 2) * 90; })
          .font("Impact")
          .on("end", draw)
          .start();
		 function draw(words) {
          d3.select(svg_location).append("svg")
              .attr("width", width)
              .attr("height", height)
            .append("g")
              .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
            .selectAll("text")
              .data(words)
            .enter().append("text")
              .style("font-size", function(d) { return xScale(d.value) + "px"; })
              .style("font-family", "Impact")
              .style("fill", function(d, i) { 
				if(negative_words.indexOf(d.key)>-1){
					console.log(negative_count);
					negative_count=negative_count+1;
					return "#FFC20A";
				}else{
					positive_count=positive_count+1;
					return "#0C7BDC";
				}
			  })
              .attr("text-anchor", "middle")
              .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
              })
              .text(function(d) { return d.key; });
			  final_pos=positive_count/(positive_count+negative_count);
			  console.log(final_pos);
			  final_neg=negative_count/(positive_count+negative_count)*100;
			  console.log("Out"+positive_count/(positive_count+negative_count)*100);
			  console.log("negative"+negative_count/(positive_count+negative_count)*100);
			  draw_piechart(final_pos);
			  

        }
		
        cloud().stop();
      }
	  
	  function draw_piechart(posvalue){
		  // Data
    var value = posvalue
    var text = Math.round(value * 100) + '%'
    var data = [value, 1 - value]
    
    // Settings
		var width = 350
    var height = 200
    var anglesRange = 0.5 * Math.PI
    var radis = Math.min(width, 2 * height) / 2
    var thickness = 50
    // Utility 
//     var colors = d3.scale.category10();
    var colors = ["#0C7BDC", "#FFC20A"]
    
    var pies = d3v3.layout.pie()
    	.value( d => d)
    	.sort(null)
    	.startAngle( anglesRange * -1)
    	.endAngle( anglesRange)
    
		var arc = d3v3.svg.arc()
    	.outerRadius(radis)
    	.innerRadius(radis - thickness)
    
    var translation = (x, y) => `translate(${x}, ${y})`
    
    // Feel free to change or delete any of the code you see in this editor!
    var svg = d3.select("#donut").append("svg")
      .attr("width", width)
      .attr("height", height)
    	.attr("class", "half-donut")
			.append("g")
    	.attr("transform", translation(width / 2, height))
    
    
    svg.selectAll("path")
    	.data(pies(data))
    	.enter()
    	.append("path")
    	.attr("fill", (d, i) => colors[i])
    	.attr("d", arc)
    
		svg.append("text")
    	.text( d => text)
    	.attr("dy", "-3rem")
    	.attr("class", "label")
    	.attr("text-anchor", "middle")

	  }
	  
		  function load_dropdown(category){
var dropdown = document.getElementById("selectNumber");
console.log("dropdown"+category);

var French_map = new Map([["The House Brasserie","-4TMQnQJW1yd6NqGRDvAeA"],
["Metro Brasserie & Bar","atNpoWy_XrhT9EUIEP6azg"],
["Voltaire Restaurant","eb7wb5yABe12tSoeCpLSbw"],
["Scratch Pastries & Bistro","0d6kx6Jlocw77y1J9nbqMA"],
["Au Petit Four","b3wgQ6CccBO8fgvlbS0M1Q"],
["Vincent's On Camelback","Tl2nqtPXlLbAG3qkUYVM2g"],
["Scratch","OZC42gnhlJ_auXduDRfMoQ"],
["Boulevard Cafe","L7wtHDiTtp6S_DzjJaXwoQ"],
["Truckin' Good Food","kYATtIsqVEoawS47UcSlDA"],
["Cafe Bink","ohMpNug5zWNxOlL6ShG7Ig"],
["Razz's Restaurant & Catering","K64Uw3a2Enh2MznpwRHWKQ"]]);

var Indian_map = new Map([["Marigold Maison- Paradise Valley","iE71iwcSljg3xm2GB2Y9aA"],
["Curry & Scoop","KvRh-exPg_KegOM_HXeskw"],
["Indian Paradise","LFfYe-hh1NKFtUKV3LUgfg"],
["New India Bazaar","_DiGwfdiH913E4LURwb2qg"],
["Copper Kettle","TElfyEowMFTPR1gAwMLcNQ"],
["Mantra Indian Cuisine","CNx_ie_OvjJHZLZ6yEO8UA"],
["Star of India","yfHYCkQaupRzWU8FIgxUPg"],
["Indian Village","x1GM1mzeDx4ARUGKV8n98Q"],
["Mirchi Indian Cuisine","AgnnYOtOmSr3W_vUmSIeaw"],
["Copper Kettle","QT4Ub4DlaDX52vdnKutD0A"],
["Aachi Southindian Kitchen","PQTtKaBK_WdvLm-zp4fQ1g"],
["Nirvana Indian Cuisine","prFx0Kg92PfPkoU8OY4KxA"],
["Khyber Halal","zNGYsFeG_7XEBodbtfux5Q"],
["Guru Palace","VoHTd4QkPGWXl6IGI72isQ"],
["Haldi Indian Cuisine","XANbZSZLGPSMV1QPzPXVtw"],
["Paradise Biryani Pointe","TAnzFr9NixvCbvUdJMWL5Q"],
["Bombay Palace","q7T-qCW0WLemnnLt88OuWQ"],
["Twisted Curry","RU6E7WsAfsTRcjXxH1Lo5A"],
["Passage To India","KfxPrJ5PzgFRm2XltnbBLQ"],
["Woodlands Vegetarian South Indian Kitchen","GiDPLKtTfNHTb0koEWIz2g"]]);

var Itailan_map = new Map([["La Cucina Bistro & Wine Bar","tR4VVIdzcJCQus4GUFq3IA"],
["Pizza People Food Truck","scoJNOqcw2peNlO31UYTaA"],
["Maui Pasta","Mnu3EPpuzu3UUN1PIwFRoQ"],
["Lucky's Pizza","pt7p4klGicvPZe04mhhVGQ"],
["Pizza A Metro","VRC7J-ahI4em9ddhihxq5w"],
["Basilico Italian Restaurant","2ehEw8EFYVwefZTxDeiERw"],
["Adela's Italian","_e3rChyednoh47n2cjGv2w"],
["Dolce Vino Wine Bar Italian Cuisine","dhaSDuAoZI0K3hp8aU7otQ"],
["Ray's Pizza","c33m1IMz1N7S1-sqTbsqRA"],
["Pubblico Italian Eatery","6Leb5-5Wl7OfPM12LaFQeA"],
["DeNora's Ristorante","CCs5domumJRZ3-Blpt8jTw"],
["Tony's Italian Delicatessen","Ks13abA-KZWAA6FMQagQmg"],
["Pasta -N- More","3h9K-ZsuG0PwhmyiPrXKhA"],
["L'Amore Italian Restaurant","ZVtjS8Hvq2a6SxHxlehPGg"],
["Sbarro","vlc_yP8dfz8CGE6JRMKBZA"],
["Basil & Garlic Bistro","4qQVf2lt-47VcQ4v54PEXQ"],
["Pasto di Forno","GzYAIjVULpRrFV2dQMKDog"],
["Michael's Pizza","rAxKaT0cCtOuUaSt0x8pQg"],
["Leoni's Focaccia","Eb97gjJ6mkcx7Y-tFObjEw"],
["Casa Mia","e_BiI4ej1CW1F0EyVLr-FQ"]]
);

  var Japanese_map = new Map([["Crazy Sushi & Crab","R_M4P9XetEM-aLE7eHdthw"],
["Yama Sushi House","J9kvWCw5FGTCjEFBaB0nEw"],
["ShinBay","4gwh0q7JsdzHIm_pdYUlZg"],
["Sushi Kee","3b-jZX9Ms0U9B2Oy_ZmNMA"],
["Posh Improvisational Cuisine","fI9ErCUGY8rXRPBbatcxMA"],
["Samurai Sam's","3HU3V2AYuVUxdd_Q5Nv5Vw"],
["Sushi San","IEVrILZ7bkuJMYKsbAfWaQ"],
["Yoko Fast Food","J7rkQISD48jXgdM6UxNAbw"],
["Yasu Sushi Bistro","oZcbn7ENit23xbCsyu9xbA"],
["Sushi Sen","Wg4jlAgOUB51aX1c3ex9GQ"],
["Pure Sushi","R1oI13c1oNxE91wkjYDeow"],
["Jin Shabu","Ij6Q806LeOvFt3XWVpJ9sg"],
["Enjoy Sushi Café","gU7xFSbbu9KX4OSBhG9ElA"],
["Sarku Japan","J8hNZEebgXK8-LWBXHVInA"],
["Haiku Tokyo","SfvxPlsZrvyPXbuAW8KCMw"],
["Teharu Sushi","35Z23ZztQCsJdASRbU69Vg"],
["Sushi Fix","U5ZlFP1kBFzlmnaIn1f9sQ"],
["Maguro Sushi and Ramen","dl6mrYTQQoj03Im_Nntixw"],
["Blu Sushi","2r6UD7ExSMrK0LGeglquDA"],
["Chix Char Broiled Grill","7NXSKpruXOrm9_INkZAFEQ"]]);

var Mediterranean_map = new Map([["Pita Kitchen - Arrowhead","Q8GBjqGjamI3b2ZaPQNa_Q"],
["Wessen Int'l Kitchen","Y3awsAE8mFdCG8nwEXWF8w"],
["Sheba's","YR202Rbw0E4aiUJNeAJjOg"],
["Greek Palace Mediterranean","WPmOztfJVgOq04rwPIQTUg"],
["Pitta Souvli","Lsy_RA1xk9qHFLzLNWKBww"],
["TRES Tempe","SKQU3a1CbX3mHxilRvM3GQ"],
["Pita Di Vita","L3Wbv_0hHpW1Izi2li6Ugw"],
["Paradise Mediterranean Grill","6zkpirZ4qCfsbd33unJ5nQ"],
["Gyro House","GQxpWDw3MuCwAMV9BA-62w"],
["George's Famous Gyros & Pasta","cq6SQkWKVT3TH-6YzGFn4g"],
["Eden's Grill Inn","G8k2E3oYHHl2o4lNJQwR-g"],
["Doner Kebab Chef RD","_lD9Y_0OfzZjfz5s-FVwqQ"],
["Gyros Plus","AW66lAeZQW3ss38HjB9ZaA"],
["Rania's Kabob Grill","6Cl15LapBVhw4ZfBIeVJJA"],
["Mashawi Lebanese Grill","a6asAPtLHfWG871UBizACw"],
["KOVO Modern Mediterranean","SJbXs2aVMhFawgjCcbH8aQ"],
["Pita Cafe","89Eqssb01O4-3-btGyvXoQ"],
["Yo Pauly's NY Pizza","llCxryWr8j1S39tusYCWxg"],
["Sunset Bistro","DGOWO87MQmA4-2swRLK2DA"]]);

var Mexican_map = new Map([["Pollo Picante","dddUz7IweLuFYelc3ZIyNA"],
["Taqueria Yaqui","02eESJZNF3qigrJ3GNRgIQ"],
["Sonora Mesquite Grill","VoTi4yVhTVyFdmxUpoyUsg"],
["Mi Cocina","gT4gngtGKYOW-jl5UIBahg"],
["El Nuevo Taquito","M9aTtOeOIG-EOLeHNgkKfQ"],
["Centro Botanero Salsitas","Scs-a2ybPdeT_mb7uZyLkQ"],
["Dilla Libre Gourmet Quesadillas Food Truck","A2eA3LRbptrexCGw8fu67Q"],
["El Chiltepin Mexican Food","pNSHrFBlwWgTY9es9sdEWA"],
["Tortas Ahogadas Guadalajara","ETSHD1lX0xcd2qInwiXxzA"],
["Mariscos  Bahia De Guaymas","wOw-YvucvqNHDhwltGsNpQ"],
["Cocina Madrigal","9MVKjEMN5T59uzG1xoD2BQ"],
["Hal O Penos Mexican Cafe","RZjCS8U_UuZaAmo5YawkOg"],
["Comedor Anita","keChsvTIWsPUc4KX-ayRVw"],
["Tony's Cafe","9OX_55wAPyuKKI6Zdp7qag"],
["Rita's Burritos","_H4GXECi4nHfJTz4dsQV_w"],
["Angelina's Fry Bread","twrgw3ZaMEiS87sN5ahuuw"],
["ALMA","IcSr0gUNSgVvjsgqSEKnbw"],
["Sin Son Nay","e-VnK6aV87kpu1dMQJB7fQ"],
["Pacifica Ceviche","DmAKN7KxGLFXGqAk23EDHg"],
["Vaquero's","CIU0NCEOof6qF6AasxUvTA"]]);

var Mideast_map = new Map([["AZ Kabob House","Er2XAYN8l1BadlYFwiPb9g"],
["Toh Zan Nagasaki Grill","kO1-ZswCgQak2beKUMaYRw"],
["Shawarma Corner","Ofr0PzgcDOv9Fy5xqsbGhQ"],
["Paprika Mediterranean Experience","bJWujT6cMgdUP-aXy6AitQ"],
["T&J Gyro and Burger","EFHpf_-SPzShCYiS-nMPWw"],
["Caroun","9SaFi9c_imgP8LqeJC1YEA"],
["Abdeen International Market and Cafe LLC","zNGJKwCV6r1BzA4pm3eC5Q"],
["Al-Hana Restaurant","0ccI-aZfoqD4PteESpfShg"],
["ZK Grill","OwZM33ZI8LZVknaLICWIhw"],
["Flaming Kabob","YbweWBgYj9T3VqMFJcQlOw"],
["Mandi House","6-ZXctu-Duee3rGY3lC-uQ"],
["Alzohour Market","njaKms2uQcdTtlI0urqPaA"],
["Saba's Mediterranean Kitchen","len2nrEtgD9bjnoYSyLPjA"],
["Pita Heaven","W5l5_CmHd-n1CDTHdEkYTw"],
["Pita Shack","YZGAUc8CaWWc6ICSfeecoA"],
["Zabari Mediterranean Grill","ahfAFuFHO9tfFkoBIkVdmg"],
["Bowl of Greens","HyzHidtQXC4JIULtSbk3NA"],
["Tasty Grill","CyaiHieU5WcosKWIwyOX9g"],
["Zeta's Grill","X1S8u_cFfBpdWfvQBo_BqA"],
["YS Restaurant","_BJdRw73rGb35ofd3ElTUA"]]);

var Thai_map = new Map([["Tum Nak Thai","vMnB2Cz3c1Io1IEyeLLVOA"],
["Sa Bai On The Fly","EyE2NntpQyVPaLX7gSC9dA"],
["Chao","f25NsTObxX0NEhBVm44-GA"],
["Thai Patio","C6MG3vrloHF8h9PPvZNiJA"],
["Bao Chow","7eJ5j1paJciRBPbRYU8u1A"],
["Asian Corner Cafe","JNlxqS6xX5qgsb90eDu8TQ"],
["Siamese Kitchen","g_6gQKZxj9HHbTa1OaUtnQ"],
["Tom Yum Thai Surprise","4-Ub64zwqopWZeOFsTYTzA"],
["Thai Chili To Go","uKF_BmC-FwOLY-7Gtm1OSg"],
["Tasty Thai Restaurant","l3bmBkr8_Pw3G-QkX0tPrw"],
["Thai Plates Cuisine","miySsDV_1YKS3EqqGwblQQ"],
["Pho Number One","uoZwJJaplLsktVrRw0JiQw"],
["Sala Thai Peoria","8-F2JKHSCbgLQ55JxGU9gg"],
["5 R Cha Thai Bistro","B5E_Qp3R1q0oRlzbYaWIkQ"],
["Tipp's 88 Thai Restaurant","7eEfpzUTAd1hAxXKlLQaJA"],
["Jasmine Thai Cuisine By Kelly","9vn0tLOpiGjSUp_mCI0ZLA"],
["Ginger Zing","w3RH9W99ZIKvw0Qgibdn4w"],
["ThaiTini","GJ9CgvTBKaDb9qLFEBbzHg"]]
);

var American_map = new Map([["Hometown Dogs","WqL96qA0l3ewibg8j1U-0A"],
["Horizon Room","T_1Q5-7yUyAW5jFe2N8eUg"],
["American Legion Post 35 - Mathew B Juan","CY8fjeXcaP9vsR0NERfgw"],
["Worth Takeaway","SSCH4Z2gw-hh2KZy7aH4qw"],
["Monroe's Downtown","qJl8r3R7xqecjNcUkcteRQ"],
["ATL Wings Your Way","ArI4L2dLFa_U4ecu6UIBMA"],
["Bakie Bites Bakery","gxRHcGs9usejqTGrM5_AiQ"],
["Rock-n-Roll Fingers","i5snLVanPG1R9foC0QfkXQ"],
["Old Glory Cafe","eAuPhflD_h9Xux-LlIWu9A"],
["Charlie D's Catfish & Chicken","1mkDrJRu3VABKy95gxD-Hg"],
["Cuff","2RsLaIEnNUIzjQyCvPCNWA"],
["El Dorado Bar and Grill","QmUKLiLynDktbtwV_vQXw"],
["Starpointe Cafe","T1CJ_QHjlAKzNJkNMWkh8Q"],
["The Great American Grill","oR0gq3wNyDrpDu1FQNtB3Q"],
["International House of Food","JkzqS4JDOpoHrj534rzvAA"],
["CHAR'D Brisket Dogs + Burgers","ewd7sVeRLWz9YzuTsvwuwg"],
["Betty's Rooste","bR23zlcVESo_vnBlCLBpwQ"],
["Al's Gyro's","A2J7d9UxD40rVgjaKflVhw"]]);

var Chinese_map = new Map([["Yao Fine Chinese Cuisine","cmsAFAymfVoBitSF8R6GKw"],
["King Wok","tK-PQOhZo94fonbQVXaOSg"],
["Jade Palace","omisgpMWACc0eL6rKGjAGQ"],
["Good China Restaurant","Fif1uzIU95ttv6kbtRg0ZA"],
["Szechuan Cuisine","9TWQ9TDxC11oJat-W5AIhA"],
["Dragon Island Chinese Restaurant","CrM_FY9NIoDWudQYHlO7UQ"],
["Szechwan Noodle","T0ea32kBf7L33XUhIdwjbA"],
["YC's Mongolian Grill","JhEtJbGjAqKDHCZ11i3qoQ"],
["Wei wok","_xgxCB0OY0PmlSL4FFBBZg"],
["Que Huong Restaurant","B1TlRyjCW3Ygkp95MACffA"],
["Big Bowl Restaurant","qMJCVx6-ZYvZQHlfrZ_cug"],
["Dim Sum Cafe","tnvZOd2vNCLPQS1KEZxqog"],
["Jade The Taste of China","sWeVNiPulXsD8PWhEtn9Ew"],
["Yi's Chinese Restaurant","_287i8ZeEf0H1LiqPhyvBg"],
["Devil's Mo","CpJRzbebSyHwOFNsOixK1w"],
["Song San","ZKWGMUV_XqxtISRcDGUnrA"],
["George & Son's Asian Cuisine","UUtWoDyREiy9MPdtTRFUYQ"]]);
// Loop through the array
var word=category+"_map";
//console.log("val"+eval(word));
var keys=Array.from(eval(word).keys() );
console.log(keys);
dropdown.length=0;
for (var i = 0; i < keys.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(keys[i], keys[i]);
}

		  }
		  
//		  load_dropdown("Mexican");