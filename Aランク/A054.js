//未完成
//2/10テストケースクリア
//8/10ランタイムエラー

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
	const q = Number(lines[0].split(" ")[2]);
	const line = lines.slice(1);

	let line_map = line.map((n) => n.split(" "));
	//   console.log(line_map)
	let goodwork = new Map();
	let array = []
	line.forEach((n, x) => {
		const a = n.split(" ")[0];
		const b = n.split(" ")[1];
		array[x] = { id: a, good: b }

	})

	const member = [];
	for (let i = 1; i <= n; i++) {
		member.push(i);
	}
	//   console.log(member)

	let power = 0;
	for (let i = 1; i <= n; i++) {
		let m_list = [];
		let p = 0;
		for (let j = 0; j < m; j++) {
			//   console.log(`j: ${j}`,(i+j) % n);
			if ((i + j) % n !== 0) {
				p = (i + j) % n - 1;
			} else {
				p = n - 1;
			}
			m_list[j] = member[p];
		}
		//   console.log(m_list)
		let count = 0;
		for (let k = 0; k < m_list.length; k++) {
			const work = k + 1;
			for (let l = 0; l < q; l++) {
				if (line_map[l][0] == m_list[k] && line_map[l][1] == work) {
					count++
				}
			}
			if (power < count) {
				//   console.log(count)
				power = count;
			}
		}
	}
	console.log(power)

});

