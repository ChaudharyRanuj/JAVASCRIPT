const request = new XMLHttpRequest();
request.open("GET", "http://api.citybik.es/v2/networks"); // Initializes a request.
request.send(); // Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
request.addEventListener("load", function () {
  console.log(this.getAllResponseHeaders());
  const data = JSON.parse(this.responseText);
  renderdata(data);
});
