class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var sortedArrayToBST = function(nums) {
    
    function build(left, right) {
        // Base case
        if (left > right) {
            return null;
        }

        // Find middle
        const mid = Math.floor((left + right) / 2);

        // Create root node
        const root = new TreeNode(nums[mid]);

        // Build left subtree
        root.left = build(left, mid - 1);

        // Build right subtree
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, nums.length - 1);
};


const result = sortedArrayToBST([-10, -3, 0, 5, 9]);

console.log(JSON.stringify(result, null, 2));