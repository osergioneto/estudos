function upper(strings,...values) {
	const upperValues = values.map(element => element.toUpperCase());
	const finalString = strings.map((element, index) => {
		return upperValues[index] !== undefined ? `${element}${upperValues[index]}` : `${element}`;
	}).join("");

	return finalString;
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
