function solution(k) {
    let red = 0;
    let yellow = 0;
    for (let i = 1; i <= k; i++) {
        if (i % 2 === 0) {
            red += i * i;
        } else {
            yellow += i * i;
        }
    }
    return red - yellow;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test appleBoxes

// alternative solution
