// https://codingdojang.com/scode/393?answer_mode=hide

// str(list(range(10001))).count('8')
// 이 코드는 알고리즘 문제 풀이할 때만 쓰세요.
".".repeat(99);
".".repeat(99).split(".");
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1);
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1);
"."
  .repeat(99)
  .split(".")
  .map((v, i) => i + 1)
  .join("")
  .split("")
  .filter((v) => v === "8").length;

let s = "";
for (let i = 0; i < 101; i++) {
  s += i;
}
s.split("").filter((v) => v === "8").length;

Array(100)
  .fill(0)
  .map((v, i) => "" + i);

Array(101)
  .fill(0)
  .map((v, i) => "" + i) // 안에서 메서드 체이닝을 한 번 더 할 수 있지만 복잡도만 상승할 것 같아 실행하지 않았습니다.
  .join("")
  .split("")
  .filter((v) => v === "8").length;

let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 45];
weight.sort((a, b) => a - b);
total = 0;
count = 0;
for (let i = 0; i < weight.length; i++) {
  if (total < 500) {
    total += weight[i];
    count++;
  }
}
if (total > 500) {
  count--;
}
console.log(count);
