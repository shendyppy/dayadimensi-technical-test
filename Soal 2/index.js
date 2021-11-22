/* Technical Test 2 */

function sameClothes(data) {
	let temp = [];
	for (let i = 0; i < data.length; i++) {
		let subTemp = "";
		for (let j = 0; j < data[i].length; j++) {
			subTemp += data[i][j];
		}
		temp.push(subTemp);
	}

	let isSame = true;

	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < i; j++) {
			if (temp[i] === temp[j]) {
				isSame = false;
			}
		}
	}
	return isSame;
}

const clothes = [
	["JakartaJS"],
	["AWSome Day", "Elixir"],
	["GoJakarta", "Elixir"],
];

const clothes2 = [["JakartaJS", "Elixir"], ["Elixir"], ["JakartaJS", "Elixir"]];

console.log(sameClothes(clothes));
console.log(sameClothes(clothes2));
