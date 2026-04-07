var rightSideView = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            // last node of this level
            if (i === size - 1) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
};