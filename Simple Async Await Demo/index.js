import fetch from "node-fetch";
// Example POST method implementation:
console.log("Start");
let url = "https://jsonplaceholder.typicode.com/users";
async function postData() {
  console.log("Fetch");
  const response = await fetch(url);
  console.log("Await");
  const data = await response.json();
  console.log("Response Received");
  return data;
}
async function getData() {
  console.log("Get Data");
  let receivedData = await postData();
  console.log("Data Received");
  console.log(receivedData);
}
// `1234567890~!@#$%^&*()`
getData();
console.log("End");
