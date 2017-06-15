var translator = (function(){

	let russianLexicon = new Map();
	console.log("russianLexicon", );
	russianLexicon.set("merry", "веселый");
	russianLexicon.set("christmas","рождество");
	russianLexicon.set("and", "и");
	russianLexicon.set("happy", "счастливый");
	russianLexicon.set("new", "новый");
	russianLexicon.set("year", "год");

	console.log("russianLexicon", russianLexicon);
	console.log("0th element", russianLexicon.get("merry"));
}())
