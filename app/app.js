'use strict';

angular.module('nifiApp', ['ngRoute', 'ngMaterial', 'ngMessages','ngSanitize']);

var nifi = new XMLHttpRequest();
nifi.open("GET", "http://localhost:9090/nifi-api/resources", false);
nifi.send();

var temp = JSON.parse(nifi.responseText);

var procesory = [];
var grupy = [];
var input = [];
var output = [];
var wszystko = [];

for (var i = 0; i <temp.resources.length; i++)
{
	if (temp.resources[i].identifier.search("processors") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1)
	{
		procesory.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
	else if (temp.resources[i].identifier.search("process-groups") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1 && temp.resources[i].identifier.search("remote") )
	{
		grupy.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
	else if(temp.resources[i].identifier.search("input-ports") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1)
	{
		input.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
	else if (temp.resources[i].identifier.search("output-ports") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1)
	{
		output.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
}




/*
console.log(procesory);
*/
console.log(wszystko);/*
console.log(input);
console.log(output);
/*	
function addCount() {
    var now = angular.element(x).html();
    angular.element(x).html(elem);
}
*/

var u = [];

function lista (dane)
{
	for (var i=0; i<dane.length; i++)
	{
		//definiowanie nowych elementów listowania
		var j =[];
		j[i] = new XMLHttpRequest();
		j[i].open("GET", "http://localhost:9090/nifi-api" + dane[i].identifier, false);
		j[i].send();
		//dane wynikowe
		
		var t =[];
		t[i] = JSON.parse(j[i].response);
		console.log(t[i].component.name);
		//url
		u[i] = t[i].uri;
		console.log(u[i]);
		button(u[i]);
		
		//wypisanie w dokumencie
		//document.write("<div><li><a href='' onclick='\"button(u[i])\"'><b>" + t[i].component.name +"</b></br>" + t[i].component.id + "</a></li></div>");	
		document.write('<li ><button><b>' + t[i].component.name +'</b></br>' + t[i].component.id +'</br></button></li>');
			
	}	

}
/*
var dane;
$(document).ready(function(){
$('button').click(function (event) {
	event.target.baseUrl = "http://localhost:9090/nifi-api/processors/" + event.target.childNodes[2].data;
	elem.open("GET", event.target.baseUrl, false);
	elem.send();
	console.log(elem.response);
	dane = JSON.parse(elem.response);
	console.log(dane);
	console.log(event);
	console.log(event.target.baseUrl);
	console.log(event.target.childNodes[2].data);
	console.log("klik");

});
});
*/

function polaczenia (dane)
{
	for (var i=0; i<dane.length; i++)
	{
		var c =[];
		c[i]=new XMLHttpRequest();
		c[i].open("GET", "http://localhost:9090/nifi-api" + dane[i].identifier +"/connections", false);
		c[i].send();
		var c1 = [];
		c1[i] = JSON.parse(c[i].response);
		for(var c=0; c<c1[i].connections.length; c++)
		{
			document.write("<li ><button><i>" + c1[i].connections[c].id+ "</i></br> gr: " +c1[i].connections[c].destinationGroupId +"</button></li>");
			console.log(c1[i].connections[c].id);
		}
	};
}

var elem = new XMLHttpRequest();


function button (uri)
{	
	elem.open("GET", uri, false);
	elem.send();
	//console.log(elem.responseText);
	
	//console.log(elem.statusText);
}



