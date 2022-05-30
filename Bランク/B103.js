//カブトムシの誘導

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

	//start時点
	const s_R = Number(lines[1].split(" ")[0]);
	const s_G = Number(lines[1].split(" ")[1]);
	const s_B = Number(lines[1].split(" ")[2]);
	//start時点
	let x_R = s_R;
	let x_G = s_G;
	let x_B = s_B;
	let ans = 0;
	let flg = false;

	const line = lines.slice(2)

	line.some((n) => {
		const direction = n.split(" ")[0];
		const color = n.split(" ")[1];
		if (direction == "R") {
			if (color == "W") {
				x_R += 1;
				x_G += 1;
				x_B += 1;
			} else if (color == "R") {
				x_R += 1;

			} else if (color == "G") {
				x_G += 1;
			} else if (color == "B") {
				x_B += 1;
			} else if (color == "Y") {
				x_R += 1;
				x_G += 1;
			} else if (color == "M") {
				x_R += 1;
				x_B += 1;
			} else if (color == "C") {
				x_G += 1;
				x_B += 1;
			}
		} else {
			if (color == "W") {
				x_R += -1;
				x_G += -1;
				x_B += -1;
			} else if (color == "R") {
				x_R += -1;

			} else if (color == "G") {
				x_G += -1;
			} else if (color == "B") {
				x_B += -1;
			} else if (color == "Y") {
				x_R += -1;
				x_G += -1;
			} else if (color == "M") {
				x_R += 1;
				x_B += 1;
			} else if (color == "C") {
				x_G += -1;
				x_B += -1;
			}
		}
		if (x_R == x_B && x_B == x_G && x_R == x_G) {
			flg = true;
			ans = x_R;
			return true;
		}
	})

	if (flg) {
		console.log(ans);
	} else {
		console.log("no")
	}
});
