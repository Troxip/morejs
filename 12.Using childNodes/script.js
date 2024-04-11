const outDivEl = document.getElementById("outerDiv");

console.log(outDivEl);

const firstChildEl = outDivEl.childNodes[0];

console.log(firstChildEl);

const innerDivEl = outDivEl.childNodes[1];

console.log(innerDivEl);

const innerDivFirstChildEl = innerDivEl.childNodes[0];

console.log(innerDivFirstChildEl);

const nestedListEl = innerDivEl.childNodes[1];
console.log(nestedListEl);
