/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(s) {
    let a =s.split("")
    let b =[...new Set(a)]
    return b.length === 26
   
};