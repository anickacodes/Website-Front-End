// function to handle success
function success() {
  var data = JSON.parse(this.responseText); //parse the string to JSON
  console.log(data);
}

// function to handle error
function error(err) {
  console.log("Request Failed", err); //error details will be in the "err" object
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error; // call error function if request failed
xhr.open("GET", "https://api.github.com/users/anickacodes"); // open a GET request
xhr.send(); // send the request to the server.

//XMLHttpRequest returns the data as a response while the response object from Fetch contains information about the response object itself. This includes headers, status code, etc

// GET Request.
fetch("https://api.github.com/users/anickacodes")
  // Handle success
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors

//Fetch only throws an error if the request itself is interrupted. To handle 400 and 500 responses, you can write custom logic using ‘response.status’.

fetch("https://api.github.com/users/manishmshiva", {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//post
//For a POST request, you can use the “body” property to pass a JSON string as input. Do note that the request body should be a JSON string while the headers should be a JSON object.

// data to be sent to the POST request
let _data = {
  title: "foo",
  body: "bar",
  userId: 380,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(_data),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype


Object.getPrototypeOf(_data)