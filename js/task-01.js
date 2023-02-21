const ulList = document.getElementById('categories');
const categoryNumbers = ulList.children.length;

console.log(`Number of categories: ${categoryNumbers}`);

const categoryHeads = document.querySelectorAll('h2');
// console.log(categoryHeads);

categoryHeads.forEach(function (head) {
  console.log('Category:', head.textContent);
  console.log('Elements:', head.nextElementSibling.children.length);
});
