import io
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize 
file1 = open("Reviews_Text/Reviews-Thai.txt")
words = word_tokenize(file1.read())

stop_words = set(stopwords.words('english'))
other_words = ["the", "we", "it", "like","good", "great","food", "place", "service", "restaurant","would",
               "really", "us","always","definitely", "ordered","they","time","\'s", "\'ve","n\'t","one","also","love",
               "go","get","back","got","came","even","nice","order","menu","went","little","come","never","server"]
for x in other_words:
    stop_words.add(x)
# Remove single-character tokens and numbers
words = [word for word in words if len(word) > 1 and not word.isnumeric()]


# Lowercase all words
words = [word.lower() for word in words]

words = [word for word in words if word not in stop_words]

length = len(words)
# Calculate frequency distribution
fdist = nltk.FreqDist(words)
appendFile = open('Reviews_Text/Reviews-Thai-topwords.txt','a')
for word, frequency in fdist.most_common(50):
    frequency = (frequency/length) *10000
    appendFile.write("(" + word+","+str(frequency)+")"+"\n")
appendFile.close()