function useTranslate(){
	let userGivenLanguage = document.getElementById("Language-selected").value;
	let userGivenMessage = document.getElementById("userMessage").value;
	let translatedMessage = "";

	switch (userGivenLanguage){

		case "Russian":
			translatedMessage = translator.translateRussian(userGivenMessage);
			break

		case "Japanese":
			translatedMessage = translator.translateJapanese(userGivenMessage);
			break

		case "Hebrew":
			translatedMessage = translator.translateHebrew(userGivenMessage);
			break

		case "German":
			translatedMessage = translator.translateGerman(userGivenMessage);
			break

		default:
			alert("Selector broke. Please Choose a language");
	}

	// get the location of the output text
	let whereToAppend = document.getElementById("translation");

	// clear the previous values
	whereToAppend.innerHTML = "";

	// add everything to the DOM
	let translatedMessageTextNode = document.createTextNode(translatedMessage);
	let translatedMessageElement = document.createElement("p");
	translatedMessageElement.appendChild(translatedMessageTextNode);
	whereToAppend.appendChild(translatedMessageElement);
}


document.getElementById("button").addEventListener("click", useTranslate());