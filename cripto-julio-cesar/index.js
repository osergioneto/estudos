function translate(phrase, houses) {
  const alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z", ",", "."]; // Fazer um objeto
  // Já posso rearranjar o proprio alfabeto e já usar para traduzir (em uma nova variavel)
  const splitedPhrase = phrase.split("");
  for (let index = 0; index < splitedPhrase.length; index++) {
    const letterIndex = alphabet.findIndex(letter => letter === splitedPhrase[index]);
    console.log("letterIndex: ", letterIndex);
  }

  const indexedPhrase = 
  console.log("splitedPhrase: ", splitedPhrase);
  console.log(alphabet.length);
}

function getNewHouse(letterIndex ,houses) {
  letterIndex + houses > 23 ?
}

translate("itqz ftq eaxgfuaz ue euybxq, sap ue mzeiqduzs. mxnqdf quzefqu", 12);
