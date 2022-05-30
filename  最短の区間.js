//3つ目のテストケースを満たさない

const n = Number(lines[0].split(" ")[0]);
const m = Number(lines[0].split(" ")[1]);
const a = lines[1].split(" ");

let list = [];
let num = 0;
for (let i = 0; i < n; i++) {
	if (i === 0) {
		num = Number(a[i]);
		list.push(num);
	} else {
		num = num + Number(a[i]);
		list.push(num);
	}
}
//console.log(list)
let flg = false
list.some((n, x) => {
	if (n >= m) {
		console.log(x + 1);
		flg = true;
		return true;
	}
});
if (!flg) {
	console.log("-1")
}
