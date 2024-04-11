const url = "localhost:8080"

function sendRequest(endpoint, method, data){
  let request = new XMLHttpRequest();
  request.open(method, url + endpoint, true);
  request.responseType = 'json';
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(data));
  return request;
}