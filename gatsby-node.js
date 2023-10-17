exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    console.log(node.internal.type)
    if (node.internal.type === `Mdx`) {
      const parent = getNode(node.parent);
      let collection = parent.sourceInstanceName;
      createNodeField({
        node,
        name: 'collection',
        value: collection,
      });
    }
  };