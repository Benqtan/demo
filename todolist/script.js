function addToDo() {
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value;
    todoElement.value = "";
    if (todo.length < 3) {
        return alert("You must have atleast 3 characters for your todo item")
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);

    li.setAttribute("onclick", "this.remove()")

    li.appendChild(text);

    list.appendChild(li)
}

