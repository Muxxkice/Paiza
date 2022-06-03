//テストケース 4/10 で失敗
process.stdin.resume();
process.stdin.setEncoding('utf8');
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
	const k = Number(lines[0].split(" ")[2]);

	let list = []
	for (let i = 1; i <= n; i++) {
		list.push(i);
	}

	let anslist = [];
	let num = Math.round(n / m);
	for (let i = 0; i < k; i++) {
		anslist = [];
		let length = 0;
		let count = 0;
		let end = num;

		for (let j = 0; j <= m; j++) {
			let mod = list.slice(count, end)
			length += mod.length
			if (n - length > m) {
				count += num;
				end += num;
			} else {
				count += num;
				end = n;
			}
			for (let l = mod.length - 1; l >= 0; l--) {
				anslist.unshift(mod[l])
			}
		}
		list = anslist;

	}
	anslist.forEach((n) => {
		console.log(n);
	})

});
