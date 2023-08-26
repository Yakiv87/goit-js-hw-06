const itemsEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemsEl.length}`);


itemsEl.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryCount = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});