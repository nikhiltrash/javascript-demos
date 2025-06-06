import fetch from "node-fetch";
// Example POST method implementation:
console.log("Start");
let url = "https://jsonplaceholder.typicode.com/users";
async function postData() {
  console.log("Fetch");
  const response = await fetch(url);
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
getData();
console.log("End");
// test change
