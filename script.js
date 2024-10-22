const push = document.querySelector("#push")
const newTaskInput = document.querySelector("#newtask input")
const tasks = document.querySelector("#tasks")

push.addEventListener("click", function() {
    if(newTaskInput.value.length === 0){
        alert("Please Enter a Task")
    } else {
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newTaskInput.value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `
        var current_tasks = document.querySelectorAll(".delete")
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].addEventListener("click", function() {
                this.parentNode.remove();
            })
        }

        var task = document.querySelectorAll(".task")
        for(var i = 0; i < task.length; i++){
            task[i].addEventListener("click", function() {
                this.classList.toggle("completed")
            })
        }

        newTaskInput.value = ""
    }
}) 

