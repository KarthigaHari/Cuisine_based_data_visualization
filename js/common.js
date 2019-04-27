
function showThisCategory(name){
  console.log(name);
  document.getElementById("linechart").innerHTML="";
  draw();
  document.getElementById("selected").innerHTML=name;
  //console.log(document.getElementById("selected").innerHTML);
  
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
    case "American (Traditional)":
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