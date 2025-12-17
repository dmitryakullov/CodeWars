const categories = {
  id: 1,
  name: 'Electronics',
  children: [
    {
      id: 2,
      name: 'Computers',
      children: [
        {
          id: 3,
          name: 'Laptops',
          children: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Phones',
      children: [
        {
          id: 5,
          name: 'Smartphones',
          children: [
            {
              id: 6,
              name: 'Android',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// function collectCategories(node, result = []) {
//   result.push({ id: node.id, name: node.name });

//   for (const child of node.children) {
//     collectCategories(child, result);
//   }

//   return result;
// }

// console.log(collectCategories(categories));

function collectCategoriesIterative(root) {
  const result = [];
  const stack = [root]; // наш собственный стек

  while (stack.length > 0) {
    const node = stack.pop();

    result.push({ id: node.id, name: node.name });

    // добавляем детей в стек
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }

  return result;
}

console.log(collectCategoriesIterative(categories));
