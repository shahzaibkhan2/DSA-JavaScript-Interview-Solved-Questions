const tree = {
  left: {
    left: "apple",
    right: {
      left: null,
      right: {
        left: null,
        right: null,
      },
    },
  },
  right: {
    left: "apple",
    right: {
      left: null,
      right: "apple",
    },
  },
};

const apples = (node) => {
  if (node === null) {
    return 0;
  }

  let count = node === "apple" ? 1 : 0;

  if (typeof node === "object") {
    count += apples(node.left) + apples(node.right);
  }

  return count;
};

console.log(apples(tree));
