// const itemsEl = document.querySelectorAll("#categories .item");
// console.log(`Number of categories: ${itemsEl.length}`);


// itemsEl.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   const categoryCount = item.querySelectorAll('li').length;

//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryCount}`);
// });
const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

const categoryItems = categories.querySelectorAll(".item");

categoryItems.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItemsCount = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Items: ${categoryItemsCount}`);
});