//create an instance xml http
var request = new XMLHttpRequest();

//create a connection
var URL1 = 'https://restcountries.eu/rest/v2/all';
var URL2 = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json';
request.open('GET', URL1, true);
// method: the type of request: GET or POST
// url: the server (file) location
// async: true (asynchronous) or false (synchronous)

//send the request
request.send();

//load the response -> this functions is triggered only when the data is retrieved 
request.onload = function(){
    var data = JSON.parse(this.response); //this refers to request
    // console.log(this.response);
    // console.log(data);
    data.forEach(element => {
        console.log(element.name);
    });
}

