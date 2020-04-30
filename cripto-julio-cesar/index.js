require('dotenv').config();
const { createReadStream, readFileSync, writeFileSync } = require("fs");
const axios = require("axios");
const crypto = require("crypto");

const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const LETTERS_ALPHABET = 26;

function translate(phrase, houses) {
  houses = houses < LETTERS_ALPHABET ? houses : houses % LETTERS_ALPHABET;
  const sortedAlphabet = ALPHABET.map((letter, index) => getNewHouse(index, houses)).concat([",", ".", " "]);
  const splitedPhrase = phrase.split("");

  const translatedPhrase = splitedPhrase.map((letter, index) => sortedAlphabet[getSortedLetterIndex(splitedPhrase, index)]);

  return translatedPhrase.join("");
}

function getNewHouse(letterIndex, houses) { // Tratar caso de casas grandes ou negativo
  const newIndex = letterIndex + houses < LETTERS_ALPHABET ? letterIndex + houses : letterIndex - houses; 
  return ALPHABET[newIndex];
};

function getSortedLetterIndex(splitedPhrase, index) {
  const extendedAlphabet = ALPHABET.concat([",", ".", " "]); 
  return extendedAlphabet.findIndex(letter => letter === splitedPhrase[index]);
}

async function fetchEncriptedMessage() {
  const { data } = await axios.get(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${process.env.TOKEN}`);
  writeFileSync("answer.json", JSON.stringify(data));
  return data;
}

function writeAnswer({ translatedMessage, encryptedMessage}) {
  let data = JSON.parse(readFileSync("answer.json"));
  data.decifrado = translatedMessage;
  data.resumo_criptografico = encryptedMessage;

  const answer = JSON.stringify(data);
  writeFileSync("answer.json", answer, "utf-8");
}

async function sendAnswer() {
  const FormData = require('form-data');
  const form = new FormData();
  form.append("answer", createReadStream("./answer.json"));

  const { data } = await axios
    .post(`https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${process.env.TOKEN}`, form, {
      headers: form.getHeaders(),
    }
  );
  console.log(data);
}

async function main() {
  const { cifrado, numero_casas } = await fetchEncriptedMessage();
  const translatedMessage = translate(cifrado, numero_casas);
  console.log(translatedMessage);
  const encryptedMessage = crypto.createHash("sha1").update(translatedMessage).digest("hex");
  writeAnswer({ translatedMessage, encryptedMessage })
  console.log("before send 🚀🚀🚀");
  // await sendAnswer();
}

main(); 