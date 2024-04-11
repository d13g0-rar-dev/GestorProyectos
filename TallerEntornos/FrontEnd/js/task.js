function loadData(){
  let request = sendRequest("api/tasks/list", "GET", null);
  let table = document.getElementById("tasks_table");
  table.innerHTML = "";
  request.onload = function(){
    let data = request.response;
    console.log(data);
    data.forEach((element, index) => {
      table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.description}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_tasks.html?idtask=${element.id}"'>Ver</button>
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

function loadTask(idTask){
  let request = sendRequest("api/tasks/list/" + idTask, "GET", null);
  let name = document.getElementById("task_name");
  let description = document.getElementById("task_description");
  let id = document.getElementById("task_id");
  request.onload = function(){
    let data = request.response;
    name.value = data.name;
    description.value = data.description;
    id.value = data.id;
  }
  request.onerror = function(){
    name.value = "Ha ocurrido un error al recuperar los datos";
  }
}

function saveTask(){
  let id = document.getElementById("task_id").value;
  let name = document.getElementById("task_name").value;
  let description = document.getElementById("task_description").value;
  let data = {
    'id': id,
    'name': name,
    'description': description
  };
  let request = sendRequest("api/tasks/save", "POST", data);
  request.onload = function(){
    windows.location = "tasks.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al guardar los datos");
  }
}

function deleteTask(idTask){
  let idTask = document.getElementById("task_id").value;
  let request = sendRequest("api/tasks/delete/" + idTask, "DELETE", null);
  request.onload = function(){
    windows.location = "tasks.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al eliminar los datos")
  }
}