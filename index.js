//const form = document.getElementById("todo_form");

// const form = document.querySelector("#todo_form");

// const items = document.querySelectorAll(".item");
// items.forEach(function(item){
//     console.log(item);
// })

// const todos = document.querySelector("#todo_list");
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent = "hello";
// todos.lastElementChild.innerHTML = "<h1>hello</h1>";


const todos = document.querySelector("#todo_list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo_input")
const msg = document.querySelector("#msg")

button.addEventListener("click", onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if(todoInput.value === "") {
        msg.style.display = "block";
        setTimeout(function() {
            msg.style.display = "none"
        }, 2000);
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item")
    todos.appendChild(li);
    todoInput.value = ""
}