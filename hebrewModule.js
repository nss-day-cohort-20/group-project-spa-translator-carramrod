var translator = (function(oldTrans) {
    //console.log("oldTrans", oldTrans)
    let hebrewLexicon = new Map();
    //console.log("hebrewLexicon", );
    hebrewLexicon.set("merry", "עליז");
    hebrewLexicon.set("christmas", "חַג הַמוֹלָד");
    hebrewLexicon.set("and", "ו");
    hebrewLexicon.set("happy", "שמֵחַ");
    hebrewLexicon.set("new", "חָדָש");
    hebrewLexicon.set("year", "שנָה");



    //console.log("hebrewLexicon", hebrewLexicon);

    //var usertext = ("merry christmas and happy new year")

    oldTrans.translateHebrew = function(usertext) {
        let textarray = usertext.split(" ");

        let translatedarray = [];
        for (var i = 0; i < textarray.length; i++) {

            translatedarray.push(hebrewLexicon.get(textarray[i]));

        }
        return translatedarray.join(" ");



    };
    return oldTrans;
}(translator))
