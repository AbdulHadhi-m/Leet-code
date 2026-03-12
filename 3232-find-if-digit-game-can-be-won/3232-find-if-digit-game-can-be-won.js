var canAliceWin = function(nums) {
    let singleSum = 0
    let doubleSum = 0
    for(let x of nums){
        if(x<10){
            singleSum += x
        }else{
            doubleSum += x
        }
    }
  return singleSum !== doubleSum
};