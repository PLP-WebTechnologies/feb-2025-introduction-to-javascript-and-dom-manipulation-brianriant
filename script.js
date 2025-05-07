const heading = document.querySelector(".heading")
const list = document.getElementById("list")
const add = document.getElementById("add")
const body = document.getElementById("body")

add.addEventListener(
    "click", ()=>{
        const newItem = document.createElement("li")
        newItem.textContent = "dynamically added"
        newItem.style.color = "green"
        newItem.style.fontSize = "4rem"
        list.appendChild(newItem)
        console.log("Item added")
    }
)

const remove = document.createElement("button")
remove.textContent = "Remove";
body.appendChild(remove)

remove.addEventListener("click", ()=>{
    const lastItem = list.lastElementChild;
    if (lastItem) {
        list.removeChild(lastItem);
       console.log("Item removed");
    } else {
        console.log("No items to remove");
    }
})