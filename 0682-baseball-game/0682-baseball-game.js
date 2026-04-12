/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];

    for (let op of operations) {
        if (op === "C") {
            record.pop();
        } 
        else if (op === "D") {
            record.push(record[record.length - 1] * 2);
        } 
        else if (op === "+") {
            let last = record[record.length - 1];
            let secondLast = record[record.length - 2];
            record.push(last + secondLast);
        } 
        else {
            record.push(Number(op));
        }
    }

    return record.reduce((sum, score) => sum + score, 0);
};