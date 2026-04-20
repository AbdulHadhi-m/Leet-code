var findRestaurant = function(list1, list2) {
    let map = new Map(), min = Infinity, res = [];

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            let sum = j + map.get(list2[j]);

            if (sum < min) {
                min = sum;
                res = [list2[j]];
            } else if (sum === min) {
                res.push(list2[j]);
            }
        }
    }

    return res;
};