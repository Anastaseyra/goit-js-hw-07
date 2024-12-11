const categories = document.querySelector("#categories")
const categoriesArray = [...document.querySelectorAll(".item")];

console.log(`Number of categories: ${categories.childElementCount}`);

categoriesArray.forEach(item => {
    const title = item.querySelector(".item-title").textContent;
    const count = item.querySelector(".list").childElementCount;
    console.log(`Category: ${title}`)
    console.log(`Elements: ${count}`); 
}
)