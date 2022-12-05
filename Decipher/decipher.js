function digitalDecipher(eMessage, key){
	for(let i = 0; i < eMessage.length; i++){eMessage[i] -= parseInt(key.toString()[i % key.toString().length]);}
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	var out = "";
	for(let i = 0; i < eMessage.length; i++){out += alphabet[eMessage[i] - 1];}
	return out;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939)) //➞ "scout"
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)) //➞ "mubashir"
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100)) //➞ "edabit"
console.log(digitalDecipher([7, 14, 21, 13, 20, 14], 1994)) //➞ "felise"
console.log(digitalDecipher([22, 15, 16, 20, 10, 12, 6, 19, 21], 2010)) //➞ "toothless"