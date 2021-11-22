function sameClothes(clothes) {
	let isSame = false;

	for (let i = 0; i < clothes.length; i++) {
		// let temp = []
		if (clothes[i] === clothes[i + 1] || clothes[i] === clothes[i + 2]) {
			isSame = true;
		} else {
			isSame = false;
		}
	}

	return isSame;
}

const clothes = [
	["GoJakarta", "Elixir"],
	["AWSome Day", "Elixir"],
	["GoJakarta", "Elixir"],
];

console.log(clothes[0] === clothes[2]);

console.log(sameClothes(clothes));
