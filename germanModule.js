var translator = function(){

	let germanLexicon = new Map();
	console.log("germanLexicon", );
	germanLexicon.set("merry","Fröhlich");
	germanLexicon.set("Christmas","Weihnachten");
	germanLexicon.set("and", "und");
	germanLexicon.set("happy", "glücklich");
	germanLexicon.set("new", "neu");
	germanLexicon.set("year", "Jahr");

	console.log("germanLexicon", germanLexicon);
	console.log("0th element", germanLexicon.get("merry"));
}()

