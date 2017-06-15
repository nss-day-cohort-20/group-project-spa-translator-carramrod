var translator = function(oldTrans) {
    console.log("oldTrans", oldTrans);
    let germanLexicon = new Map();
    console.log("germanLexicon", );
    germanLexicon.set("merry", "Fröhlich");
    germanLexicon.set("Christmas", "Weihnachten");
    germanLexicon.set("and", "und");
    germanLexicon.set("happy", "glücklich");
    germanLexicon.set("new", "neu");
    germanLexicon.set("year", "Jahr");

    console.log("germanLexicon", germanLexicon);
    console.log("0th element", germanLexicon.get("merry"));


    var usertext = ("merry christmas and happy new year")
    oldTrans.translateGerman = function(usertext) {
        let textArray = usertext.split(" ");

        let translatedArray = [];
        for (i = 0; i < textArray.length; i++) {
            translatedArray.push(germanLexicon.get(textArray[i]);
        }
        return translatedArray.join("");

    };
    return oldTrans;

}(translator)