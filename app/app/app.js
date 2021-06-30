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
	if (temp.resources[i].identifier.search("processors") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1 && temp.resources[i].identifier.search("operation") == -1)
	{
		procesory.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
	else if (temp.resources[i].identifier.search("process-groups") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1 && temp.resources[i].identifier.search("remote") && temp.resources[i].identifier.search("operation") == -1)
	{
		grupy.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
	else if(temp.resources[i].identifier.search("input-ports") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1 && temp.resources[i].identifier.search("operation") == -1)
	{
		input.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
	else if (temp.resources[i].identifier.search("output-ports") >= 0 && temp.resources[i].identifier.search("data") == -1 && temp.resources[i].identifier.search("policies") == -1&& temp.resources[i].identifier.search("operation") == -1)
	{
		output.push(temp.resources[i]);
		wszystko.push(temp.resources[i]);
	}
}

var u = [];
var t =[];

function lista (dane)
{
	for (var i=0; i<dane.length; i++)
	{
		var j =[];
		j[i] = new XMLHttpRequest();
		j[i].open("GET", "http://localhost:9090/nifi-api" + dane[i].identifier, false);
		j[i].send();		
		t[i] = JSON.parse(j[i].response);
		document.write('<div ><li><button id="foo" onclick="buttonFun(\'' +dane[i].identifier+'\')"><b>' + t[i].component.name +'</b></br>' + t[i].component.id + '</button></li></div>');	
		
	}	

}

function polaczenia (dane)
{
	for (var i=0; i<dane.length; i++)
	{
		var c =[];
		c[i]=new XMLHttpRequest();
		c[i].open("GET", "http://localhost:9090/nifi-api" + dane[i].identifier + "/connections", false);
		c[i].send();
		
		var c1 = [];
		c1[i] = JSON.parse(c[i].response);
		for(var c=0; c<c1[i].connections.length; c++)
		{
			document.write('<div><li><button id="con" onclick="connect(\'' + c1[i].connections[c].uri+'\')"><i>' + c1[i].connections[c].id+ '</i></br> gr: ' +c1[i].connections[c].destinationGroupId +'</button></li></div>');
		}
	}
}

var dane = new XMLHttpRequest();
var scop = angular.element("#con").scope();

function connect (uri) 
{    
    dane.open("GET", uri, false);
    dane.send();
	scop.y = JSON.parse(dane.responseText);
	scop.$apply();
	console.log(scop.y);
	return scop.y;
}


var xhttp = new XMLHttpRequest();	
var scope = angular.element("#foo").scope();
var stale;
function buttonFun (uri) 
{
    xhttp.open("GET", "http://localhost:9090/nifi-api" + uri, false);
	xhttp.send();
	scope.x = JSON.parse(xhttp.responseText);
	scope.$apply();
	scope.stale = scope.x.component.config;
	return scope.x;
}