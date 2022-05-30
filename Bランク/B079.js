//B079:相性チェック

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
reader.on('line', (line) => {
	lines.push(line);
});
reader.on('close', () => {
	const a = lines[0].split(" ")[0].split("");
	let a_list = [];
	a.forEach((i) => {
		let num_a = Number(i.charCodeAt(0)) - 96;
		a_list.push(num_a);
	});

	const b = lines[0].split(" ")[1].split("");
	let b_list = [];
	b.forEach((i) => {
		let num_b = Number(i.charCodeAt(0)) - 96;
		b_list.push(num_b);
	});

	let ab_list = a_list.concat(b_list)
	let ba_list = b_list.concat(a_list)

	while (ab_list.length != 1) {
		let ab = [];
		for (let i = 0; i < ab_list.length - 1; i++) {
			let num = ab_list[i] + ab_list[i + 1];
			if (num > 101) {
				num -= 101;
			}
			ab.push(num)
		}
		ab_list = ab;
	}

	while (ba_list.length != 1) {
		let ba = [];
		for (let i = 0; i < ba_list.length - 1; i++) {
			let num = ba_list[i] + ba_list[i + 1];
			if (num > 101) {
				num -= 101;
			}
			ba.push(num)
		}
		ba_list = ba;
	}

	if (ba_list > ab_list) {
		console.log(ba_list[0]);
	} else {
		console.log(ab_list[0]);
	}

});
