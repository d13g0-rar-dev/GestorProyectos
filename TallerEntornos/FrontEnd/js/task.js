function loadData(){
  let request = sendRequest("api/tasks/list", "GET", '');
  let table = document.getElementById("tasks_table");
  table.innerHTML = "";
  request.onload = function(){
    let data = request.response;
    console.log(data);
    data.forEach((element, index) => {
      table.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.description}</td>
                    <td>${element.date.split("T")[0]}</td>
                    <td>${element.deadline.split("T")[0]}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_tareas.html?idtask=${element.id}"'>Ver</button>
                    </td>
                </tr>
                `
    });
  }
  request.onerror = function(){
    table.innerHTML = `
      <tr>
          <td colspan="5">Ha ocurrido un error al recuperar los datos</td>
      </tr>
    `;
  }
}

function loadTask(idtask){
  let request = sendRequest('api/tasks/list/' + idtask, "GET", '');
  let name = document.getElementById("task_name");
  let description = document.getElementById("task_desc");
  let date = document.getElementById("task_date");
  let deadline = document.getElementById("task_deadline");
  let id = document.getElementById("idtask");
  request.onload = function(){
    let data = request.response;
    id.value = data.id
    name.value = data.name
    description.value = data.description
    date.value = data.date.split("T")[0]
    deadline.value = data.deadline.split("T")[0]
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al recuperar los datos");
  }
}

function saveTask(){
  let id = document.getElementById("idtask").value;
  let name = document.getElementById("task_name").value;
  let description = document.getElementById("task_desc").value;
  let date = document.getElementById("task_date").value;
  let deadline = document.getElementById("task_deadline").value;
  let data = {
    'id': id,
    'name': name,
    'description': description,
    'date': date,
    'deadline': deadline
  };
  let request = sendRequest("api/tasks/save", "POST", data);
  request.onload = function(){
    window.location = "tasks.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al guardar los datos");
  }
}

function deleteTask(){
  let idtask = document.getElementById("idtask").value;
  let request = sendRequest("api/tasks/delete/" + idtask, "DELETE",'');
  request.onload = function(){
    window.location = "tasks.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al eliminar los datos")
  }
}