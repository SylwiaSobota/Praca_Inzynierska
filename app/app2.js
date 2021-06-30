'use strict';

angular.module('nifiApp', [ 'ngMaterial', 'ngMessages']);

var nifi = new XMLHttpRequest();
nifi.open("GET", "http://localhost:9090/nifi-api/resources", false);
nifi.send();

var temp = JSON.parse(nifi.responseText);

var procesory = [];
var grupy = [];
var input = [];
var output = [];

for (var i = 0; i <temp.resources.length; i++)
{
	if (temp.resources[i].identifier.search("processors") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1)
	{
		procesory.push(temp.resources[i]);
	}
	else if (temp.resources[i].identifier.search("process-groups") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1 && temp.resources[i].identifier.search("remote") )
	{
		grupy.push(temp.resources[i]);
	}
	else if(temp.resources[i].identifier.search("input-ports") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1)
	{
		input.push(temp.resources[i]);
	}
	else if (temp.resources[i].identifier.search("output-ports") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1)
	{
		output.push(temp.resources[i]);
	}
}
console.log(procesory);
console.log(grupy);
console.log(input);
console.log(output);
/*
var wyb = procesory[0].identifier;
var elem = new XMLHttpRequest();
var x = procesory[0].identifier;

elem.open("GET", "http://localhost:9090/nifi-api" + wyb, false);
elem.send();
//console.log(elem.response);

//var elem = new XMLHttpRequest();



/////////////przekazywanie parametrow
/*	
function addCount() {
    var now = angular.element(x).html();
    angular.element(x).html(elem);
}
*/



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
		var u=[];
		u[i] = t[i].uri;
		console.log(u[i]);
		button(u[i]);
		//wypisanie w dokumencie
		document.write("<div><li><a href=''><b>" + t[i].component.name +"</b></br>" + t[i].component.id + "</a></li></div>");	

	};
}
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
			document.write("<li ><a href=''><i>" + c1[i].connections[c].id+ "</i></br> gr: " +c1[i].connections[c].destinationGroupId +"</a></li>");
			console.log(c1[i].connections[c].id);
		}
	};
}

//lista(procesory);
//lista(grupy);
//lista(input);
//lista(output);

var elem = new XMLHttpRequest();

function button (procid)
{
	
	
	//console.log(procid);
	
	elem.open("GET", procid, false);
	elem.send();
	//var nowe = angular.element(procid).html();
	//console.log(nowe);
	console.log(elem.response);
	//elem.toString();
	//document.getElementById("demo").innerHTML = grupy[0].name;
	
	//dane = JSON.parse(elem.response);
	/*
	document.getElementById("demo").innerHTML = dane.component.id;
	console.log(dane.component.id);
	/*
	console.log(dane.processors[0].id);
	document.getElementById("demo").innerHTML = dane.processors[0].id;
	
//console.log(elem);*/
}

