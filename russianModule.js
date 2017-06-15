var translator = (function(oldTrans){

	let russianLexicon = new Map();
	russianLexicon.set("merry", "веселый");
	russianLexicon.set("christmas","рождество");
	russianLexicon.set("and", "и");
	russianLexicon.set("happy", "счастливый");
	russianLexicon.set("new", "новый");
	russianLexicon.set("year", "год");

	oldTrans.translateRussian = function(usertext) {

		let textArray = usertext.split(" ");
		let translatedArray = [];
		for (i = 0; i < textArray.length; i++){
			translatedArray.push(russianLexicon.get(textArray[i]));
		}
		console.log(translatedArray);
		return translatedArray.join(" ");

	};
return oldTrans;

}(translator))
