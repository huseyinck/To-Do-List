
var inputDOM = document.getElementById("input");
var listDOM = document.getElementById("list");

function add() {
    if (inputDOM.value.length == 0) {

        alert("Lütfen Mesaj girin");

    }

    else {

        listDOM.innerHTML += `<li class="list-group-item d-flex justify-content-between " id="task">${inputDOM.value}
        <i class="bi bi-x-circle" type = "button" id="delete"></i></li>`;


        var deleteDOM = document.querySelectorAll("#delete");
        for (var i = 0; i < deleteDOM.length; i++) {
            deleteDOM[i].onclick = function () {

                this.parentNode.remove();
                console.log("sa");
            }

        }

        var taskDOM = document.querySelectorAll("#task");
        for (var i = 0; i < taskDOM.length; i++) {
            taskDOM[i].onclick = function () {

                this.classList.toggle('check');
                console.log("sa");
            }

        }

        inputDOM.value = "";

    }

}




