/* Technical Test 2 */

function sameClothes(data) {
	let temp = [];

	for (let i = 0; i < data.length; i++) {
		let subData = data[i];
		for (let j = 0; j < subData.length; j++) {
			temp.push(subData[j]);
		}
	}

	const unique = (value, index, self) => {
		return self.indexOf(value) === index;
	};

	const result = temp.filter(unique);

	if (result.length < 3) {
		return false;
	} else {
		return true;
	}
}

const clothes = [
	["JakartaJS"],
	["AWSome Day", "Elixir"],
	["GoJakarta", "Elixir"],
];

const clothes2 = [["JakartaJS", "Elixir"], ["Elixir"], ["JakartaJS", "Elixir"]];

console.log(sameClothes(clothes));
console.log(sameClothes(clothes2));
