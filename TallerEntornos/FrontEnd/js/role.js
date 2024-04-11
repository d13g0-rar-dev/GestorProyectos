function loadData(){
  let request = sendRequest("api/roles/list", "GET", null);
  let table = document.getElementById("roles_table");
  table.innerHTML = "";
  request.onload = function(){
    let data = request.response;
    console.log(data);
    data.forEach((element, index) => {
      table.innerHTML += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.description}
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_roles.html?idrole=${element.idrole}"'>Ver</button>
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

function loadRole(idRole){
  let request = sendRequest("api/roles/list/" + idRole, "GET", null);
  let name = document.getElementById("role_name");
  let description = document.getElementById("role_description");
  let id = document.getElementById("role_id");
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

function saveRole(){
  let id = document.getElementById("role_id").value;
  let name = document.getElementById("role_name").value;
  let description = document.getElementById("role_description").value;
  let data = {
    'id': id,
    'name': name,
    'description': description
  };
  let request = sendRequest("api/roles/save", "POST", data);
  request.onload = function(){
    windows.location = "roles.html";
  }
  request.onerror = function(){
    name.value = "Ha ocurrido un error al guardar los datos";
  }
}

function deleteRole(idRole){
  let idRole = document.getElementById("role_id").value;
  let request = sendRequest("api/roles/delete/" + idRole, "DELETE", null);
  request.onload = function(){
    windows.location = "roles.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al eliminar el rol");
  }
}