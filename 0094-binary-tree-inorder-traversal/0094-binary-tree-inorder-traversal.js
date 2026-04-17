var inorderTraversal = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;

        dfs(node.left);        // Left
        result.push(node.val); // Root
        dfs(node.right);       // Right
    }

    dfs(root);
    return result;
};