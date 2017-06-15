var translator = (function(oldTrans) {
  
    let hebrewLexicon = new Map();
    hebrewLexicon.set("merry", "עליז");
    hebrewLexicon.set("christmas", "חַג הַמוֹלָד");
    hebrewLexicon.set("and", "ו");
    hebrewLexicon.set("happy", "שמֵחַ");
    hebrewLexicon.set("new", "חָדָש");
    hebrewLexicon.set("year", "שנָה");

<<<<<<< Updated upstream


   // console.log("hebrewLexicon", hebrewLexicon);

    //var usertext = ("merry christmas and happy new year")

=======
>>>>>>> Stashed changes
    oldTrans.translateHebrew = function(usertext) {
        
        let textArray = usertext.split(" ");
        let translatedArray = [];
        for (i = 0; i < textArray.length; i++) {

            translatedArray.push(hebrewLexicon.get(textArray[i]));
        }
        console.log(translatedArray);
        return translatedArray.join(" ");


    };
    return oldTrans;
}(translator))
