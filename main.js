function useTranslate(){
	console.log("function runs");
	let userGivenLanguage = document.getElementById("Language-selected").value;
	let userGivenMessage = document.getElementById("User-message").value;
	let translatedMessage = "";

	// if (userGivenLanguage === "Russian"){
			// translatedMessage = translator.translateRussian(userGivenMessage);
	// 	}

	if (userGivenLanguage === "Japanese"){

		translatedMessage = translator.translateJapanese(userGivenMessage);
	}

		// case "Hebrew":
		// 	translatedMessage = translator.translateHebrew(userGivenMessage);
		// 	break

		// case "German":
		// 	translatedMessage = translator.translateGerman(userGivenMessage);
		// 	break
	// console.log(translator.translateJapanese);
	console.log(userGivenMessage);
	// console.log(userGivenLanguage);
	// console.log(translatedMessage);

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


document.getElementById("button").addEventListener("click", useTranslate);