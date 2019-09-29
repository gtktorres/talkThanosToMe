export default function getSentiment(text){

    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);

    var value = result.comparative;
    var string;

    if (value < 0){
        string = "NEGATIVE";
    } else if (value < 0.5){
        string = "NEUTRAL";
    } else {
        string = "POSITIVE";
    }
    return string;
    
}
