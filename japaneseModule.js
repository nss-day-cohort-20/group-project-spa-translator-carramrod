var translator = (function(oldTrans){
	// console.log("oldTrans", oldTrans);
	let japaneseLexicon = new Map();
	// console.log("japaneseLexicon", );
	japaneseLexicon.set("merry", "メッリー");
	japaneseLexicon.set("christmas","クリストマス");
	japaneseLexicon.set("and", "と");
	japaneseLexicon.set("happy new year", "明けましておめでとう");

	// console.log("japaneseLexicon", japaneseLexicon);
	// console.log("0th element", japaneseLexicon.get("merry"));

	// var usertext = ("merry christmas and happy new year")
	oldTrans.translateJapanese = function(usertext) {

		let textArray = usertext.split(" ");
		let translatedArray = [];
		for (i = 0; i < textArray.length; i++){
			translatedArray.push(japaneseLexicon.get(textArray[i]));
		}
		console.log(translatedArray);
		return translatedArray.join(" ");

	};
	return oldTrans;

}(translator))



