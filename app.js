var req = new XMLHttpRequest();

req.open("GET", "/node.json", false);

req.send(null);

console.log(JSON.parse(req.responseText));

var 


