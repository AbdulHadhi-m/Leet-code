var generateTrees = function(n) {
    const build = (l, r) => {
        if (l > r) return [null];
        let res = [];
        
        for (let i = l; i <= r; i++) {
            for (let left of build(l, i - 1)) {
                for (let right of build(i + 1, r)) {
                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }
        
        return res;
    };
    
    return build(1, n);
};