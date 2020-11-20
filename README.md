# Toxy-API
[ToxyClassifier](http://toxyclassifier.netlify.com/) rest api !!

**Stack**: Node.js , Express , tensorflow.js

### How to use ?
Make a request to http://toxyapi.herokuapp.com/ with query string `sentence` attribute containing your text data as: 

> http://toxyapi.herokuapp.com/?sentence='your_text'

you'll get a json response with a list of different toxicities and their probabilities, each type of toxicity entity has a boolean attribute `match` if its true then your sentence is suspicious to that type of toxicity entity so, this way you can parse the suspicious toxicities.. 
