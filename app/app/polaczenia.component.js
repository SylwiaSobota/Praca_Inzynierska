'use strict';

angular.
	module('nifiApp').
	component('polaczenia', {
		template: '<h3>Dane o połączeniach</h3>'+
		'<div ng-controller="usunCtrl"><a href ng-click="Usun(y.uri, y.revision.version)">Usuń</a></div>	'+
		'Id połączenia: {{y.component.id}}'+
		'<table>'+
        '<tr><td>Id Rodzica: </td><td>{{y.component.parentGroupId}}</td></tr>'+
		'<tr><td>Nazwa:</td><td>{{y.component.name}}</td></tr>'+
        '</table>'+
        '<div>Źródło:</div>'+
        '<table>'+
        '<tr><td>Id: </td><td>{{y.component.source.id}}</td></tr>'+
        '<tr><td>Typ </td><td>{{y.component.source.type}}</td></tr>'+
        '<tr><td>Nazwa: </td><td>{{y.component.source.name}}</td></tr>'+
        '<tr><td>Id grupy: </td><td>{{y.component.source.groupId}}</td></tr>'+
        '<tr><td>Działanie: </td><td>{{y.component.source.running}}</td></tr>'+
        '</table>'+
        '<div>Punkt docelowy:</div>'+
        '<table>'+
        '<tr><td>Id: </td><td>{{y.component.destination.id}}</td></tr>'+
        '<tr><td>Typ </td><td>{{y.component.destination.type}}</td></tr>'+
        '<tr><td>Nazwa: </td><td>{{y.component.destination.name}}</td></tr>'+
        '<tr><td>Id grupy: </td><td>{{y.component.destination.groupId}}</td></tr>'+
        '<tr><td>Działanie: </td><td>{{y.component.destination.running}}</td></tr>'+
		'</table>'+
		'<a href ng-click="Dodawanie()">Dodaj połączenie</a>'+
		'<div ng-show="showMe">'+		
		'<table>'+
		'<div ng-controller="dodajPolaczenieCtrl">'+
		'<tr><td>Id źródła</td> <td> <input type="text" ng-model="zid"> </td></tr>'+
		'<tr><td>Typ żródła </td> <td> <input type="text" ng-model="ztype"> </td></tr>'+
		'<tr><td>Grupa żródła</td> <td> <input type="text" ng-model="zgrupa"> </td></tr>'+
		'<tr><td>Nazwa żródła</td> <td> <input type="text" ng-model="zname"> </td></tr>'+
		'<tr><td>Id celu </td> <td> <input type="text" ng-model="cid"> </td></tr>'+
		'<tr><td>Typ celu </td> <td> <input type="text" ng-model="ctype"> </td></tr>'+
		'<tr><td>Grupa celu</td> <td> <input type="text" ng-model="cgrupa"> </td></tr>'+
		'<tr><td>Nazwa celu</td> <td> <input type="text" ng-model="cname"> </td></tr>'+
		'<tr><td>Relacja </td> <td> <input type="text" ng-model="relation"> </td></tr>'+
		'</table>'+
		'<div ng-controller="dodajPolaczenieCtrl"><a href ng-click="Utworz()">Wyślij</a></div>'+		
        '</div>',
		controller : function ($scope)
		{
			scop = $scope;
			$scope.y= scop.y;
			console.log($scope.y);
			$scope.zid;
			$scope.ztype;
			$scope.zgrupa; 
			$scope.zname;
			$scope.cid;
			$scope.ctype;
			$scope.cgrupa;
			$scope.cname;
			$scope.relation;
			
			
			$scope.Dodawanie = function()
		{
			$scope.showMe= !$scope.showMe;
		}

		}
	});