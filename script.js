const item = document.querySelector("#item")
const todo =  document.querySelector("#todo")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addTodo(this.value)   
            this.value = ""

        }
    }
)
const addTodo = (item)=> {
    const list = document.createElement("li");
    list.innerHTML = `${item}
    <i class="fas fa-times"></i>`;
    list.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");

        }
    )
    list.querySelector("i").addEventListener(
        "click",
        function(){
        list.remove()
        }
    )
    todo.appendChild(list)
}