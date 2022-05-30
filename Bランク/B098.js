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
	const n = Number(lines[0].split(" ")[0]);
	const m = Number(lines[0].split(" ")[1]);
	const t = Number(lines[0].split(" ")[2]); //時間
	const k = Number(lines[0].split(" ")[3]); //バズ

	const line = lines.slice(1)
	const line_map = line.map((i) => i.split(" "));
	let list = [];
	for (let i = 0; i < n; i++) {
		let flg = false;
		for (let j = 0; j < m - t + 1; j++) {
			let count = t;
			let n = j;
			let sum = 0;
			while (count != 0) {
				sum += Number(line_map[n][i]);
				count -= 1;
				n += 1;
				if (flg == false && sum >= k) {
					list.push(n);
					flg = true;
				}
			}
		}
		if (flg == false) {
			list.push(0);
		}
	}

	list.forEach((n) => {
		if (n > 0) {
			console.log(`yes ${n}`)
		} else {
			console.log(`no ${n}`)
		}
	})
});
