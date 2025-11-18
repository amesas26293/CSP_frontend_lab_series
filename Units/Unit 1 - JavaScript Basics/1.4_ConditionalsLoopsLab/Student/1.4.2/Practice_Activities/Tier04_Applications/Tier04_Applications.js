function rollTwoDiceNTimes(n = 10) {
for (let i = 1; i <= n; i++) {
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;
if (die1 === die2) {
console.log(`Roll ${i}: ${die1} & ${die2} — Doubles!`);
} else {
console.log(`Roll ${i}: ${die1} & ${die2}`);
}
}
}                             