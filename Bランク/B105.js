process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});
reader.on("line", (line) => {
	lines.push(line);
});
reader.on("close", () => {
	const n = Number(lines[0].split(" ")[0]);
	const h = Number(lines[0].split(" ")[1]);
	const w = Number(lines[0].split(" ")[2]);
	const line = lines.slice(1);
	const game = line.map((el) => el.split(" "));
	let bord = Array.from(new Array(h), () => new Array(w).fill("0"));
	//   console.log(bord)


	let p = "a";
	for (let i = 0; i < game.length; i++) {
		const g_x = Number(game[i][0]);
		const g_y = Number(game[i][1]);
		const s = Number(game[i][2]);
		let count_y = 0;
		let count_x = 0;

		// console.log("i:" + i);
		for (let y = g_y; count_y < s && y < h; y++) {
			// console.log(`count_y:${count_y}`)
			for (let x = g_x; count_x < s && x < w; x++, count_x++) {
				//   console.log(`y: ${y} x: ${x}`);
				if (p == "a") {
					if (bord[y][x] == "0") {
						bord[y][x] = "a";
						//console.log(bord)
						// console.log(bord[x])
					} else if (bord[y][x] == "b") {
						bord[y][x] = "c";
					} else if (bord[y][x] == "c") {
						bord[y][x] = "b";
					}
				} else if (p == "b") {
					if (bord[y][x] == "0") {
						bord[y][x] = "b";
					} else if (bord[y][x] == "a") {
						bord[y][x] = "c";
					} else if (bord[y][x] == "c") {
						bord[y][x] = "a";
					}
				} else if (p == "c") {
					if (bord[y][x] == "0") {
						bord[y][x] = "c";
					} else if (bord[y][x] == "a") {
						bord[y][x] = "b";
					} else if (bord[y][x] == "b") {
						bord[y][x] = "a";
					}
				}
			}
			count_y += 1;
			count_x = 0;

		}

		if (p == "a") {
			p = "b";
		} else if (p == "b") {
			p = "c";
		} else {
			p = "a";
		}
		// console.log(bord)
	}


	let count_a = 0;
	let count_b = 0;
	let count_c = 0;
	bord.forEach((n) => {
		n.forEach((i) => {
			if (i == "a") {
				count_a += 1;
			} else if (i == "b") {
				count_b += 1;
			} else if (i == "c") {
				count_c += 1;
			}
		})
	})
	console.log(count_a, count_b, count_c)
});
