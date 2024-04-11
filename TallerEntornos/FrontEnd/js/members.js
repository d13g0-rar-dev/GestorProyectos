function loadData(){
  let request = sendRequest("api/members/list", "GET", null);
  let table = document.getElementById("members_table");
  table.innerHTML = "";
  request.onload = function(){
    let data = request.response;
    console.log(data);
    data.forEach((element, index) => {
      table.innerHTML += `
                <tr>
                    <th>${element.documento}</th>
                    <td>${element.nombre}  ${element.apellido}</td>
                    <td>${element.email}</td>
                    <td>${element.telefono}</td>
                    <td>${element.role}</td>
                    <td>${element.task}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick='window.location = 
                        "form_member.html?idMember=${element.idMember}"'>Ver</button>
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

function loadMember(idMember){
  let request = sendRequest("api/members/list/" + idMember, "GET", null);
  let documento = document.getElementById("member_documento");
  let tipo_documento = document.getElementById("member_tipo_documento");
  let name = document.getElementById("member_name");
  let email = document.getElementById("member_email");
  let telefono = document.getElementById("member_telefono");
  let password = document.getElementById("member_password");
  let role = document.getElementById("member_role");
  let task = document.getElementById("member_task");
  let id = document.getElementById("member_id");
  request.onload = function(){
    let data = request.response;
    documento.value = data.documento;
    tipo_documento.value = data.tipo_documento;
    name.value = data.name;
    email.value = data.email;
    telefono.value = data.telefono;
    password.value = data.password;
    role.value = data.role;
    task.value = data.task;
    id.value = data.id;   
  }
  request.onerror = function(){
    documento.value = "Ha ocurrido un error al recuperar los datos";
  }
}
function saveMember(){
  let documento = document.getElementById("member_documento").value;
  let tipo_documento = document.getElementById("member_tipo_documento").value;
  let name = document.getElementById("member_name").value;
  let email = document.getElementById("member_email").value;
  let telefono = document.getElementById("member_telefono").value;
  let password = document.getElementById("member_password").value;
  let role = document.getElementById("member_role").value;
  let task = document.getElementById("member_task").value;
  let id = document.getElementById("member_id").value;
  let data = {
    'documento': documento,
    'tipo_documento': tipo_documento,
    'name': name,
    'email': email,
    'telefono': telefono,
    'password': password,
    'role': role,
    'task': task,
    'id': id
  };
  let request = sendRequest("api/members/save", "POST", data);
  request.onload = function(){
    window.location = "members.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al guardar los datos");
  }
}

function registerMember(){
  let documento = document.getElementById("member_documento").value;
  let tipo_documento = document.getElementById("member_tipo_documento").value;
  let name = document.getElementById("member_name").value;
  let email = document.getElementById("member_email").value;
  let telefono = document.getElementById("member_telefono").value;
  let password = document.getElementById("member_password").value;
  let data = {
    'documento': documento,
    'tipo_documento': tipo_documento,
    'name': name,
    'email': email,
    'telefono': telefono,
    'password': password,
  };
  let request = sendRequest("api/members/save", "POST", data);
  request.onload = function(){
    window.location = "login.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al guardar los datos");
  }

}

function deleteMember(idMember){
  let idMember = document.getElementById("member_id").value;
  let request = sendRequest("api/members/delete/" + id, "DELETE", null);
  request.onload = function(){
    window.location = "members.html";
  }
  request.onerror = function(){
    alert("Ha ocurrido un error al eliminar los datos");
  }
}

