//映画館の予約
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

	const h = Number(lines[0].split(" ")[1]);
	const w = Number(lines[0].split(" ")[2]);

	const p = Number(lines[0].split(" ")[3]);//最も見やすい席の縦軸
	const q = Number(lines[0].split(" ")[4]);//最も見やすい席の横軸
	const line = lines.slice(1)
	const line_map = line.map((n) => n.split(" "))

	let array = Array.from(new Array(h), () => new Array(w).fill(0));
	let cost = 0;
	for (let s = 0; s < h; s++) {
		for (let t = 0; t < w; t++) {
			if (s > p && t > q) {
				cost = Number(s - p + t - q)
				array[s][t] = cost;
			} else if (s > p) {
				cost = Number(s - p + q - t)
				array[s][t] = cost;
			} else if (t > q) {
				cost = Number(p - s + t - q)
				array[s][t] = cost;
			} else {
				cost = Number(p - s + q - t)
				array[s][t] = cost;
			}
		}
	}
	line_map.forEach((n) => {
		let x = n[0];
		let y = n[1];
		array[x][y] = false;

	})

	let earlist = h + w
	for (let s = 0; s < h; s++) {
		for (let t = 0; t < w; t++) {
			if (array[s][t] !== false && array[s][t] < earlist) {
				earlist = array[s][t];
			}
		}
	}

	if (array[p][q] !== false) {
		console.log(p, q);
	} else {
		for (let s = 0; s < h; s++) {
			for (let t = 0; t < w; t++) {
				if (array[s][t] == earlist) {
					console.log(s, t);
				}
			}
		}
	}
});
