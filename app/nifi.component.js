'use strict';

angular.
	module('nifiApp').
	component('nifi', {
		template: //Url : 'nifi.template.html',	
			'<div ng-controller="usunCtrl"><a href ng-click="Usun(x.uri, x.revision.version)">Usuń</a></div>	'+	
			'<div ng-controller="runCtrl"><a href ng-click="Run(x.revision.clientId, x.revision.version, x.id, x.uri)">Uruchom</a></div>	'+	
			'<div ng-controller="runCtrl"><a href ng-click="Stop(x.revision.clientId, x.revision.version, x.id, x.uri)">Zatrzymaj</a></div>'+
			'<table>'+			
			'<tr><td>Nazwa:</td><td>{{x.component.name}}</td></tr>'+
            '<tr><td>Id:</td><td> {{x.component.id}}</td></tr>'+
            '<tr><td>Id Rodzica:</td><td> {{x.component.parentGroupId}}</td></tr>'+
            '<tr><td>Stan :</td><td> {{x.component.state}}</td></tr>'+
			'</table>'+
			'<h4>Dane o statusie </h4></center>'+
			'<table>'+
            '<tr><td>Status uruchomienia: </td><td>{{x.status.aggregateSnapshot.runStatus}}</td></tr>'+
            '<tr><td>Bajty odczytane: </td><td>{{x.status.aggregateSnapshot.read}}</td></tr>'+
            '<tr><td>Bajty zapisane: </td><td> {{x.status.aggregateSnapshot.written}}</td></tr>'+
            '<tr><td>Input:</td><td>{{x.status.aggregateSnapshot.input}}</td></tr>'+
			'<tr><td>Output:</td><td> {{x.status.aggregateSnapshot.output}}</td></tr>'+
            '<tr><td>Flow file IN: </td><td>{{x.status.aggregateSnapshot.flowFilesIn}}</td></tr>'+
            '<tr><td>Flow file OUT: </td><td>{{x.status.aggregateSnapshot.flowFilesOut}}</td></tr>'+
			'<tr><td>Liczba tasków: </td><td>{{x.status.aggregateSnapshot.tasks}}</td></tr>'+
            '<tr><td>Łączny czas trwania tasków: </td><td>{{x.status.aggregateSnapshot.tasksDuration}}</td></tr>'+
            '<tr><td>Liczba wątków aktualnie wykonywanych: </td><td>{{x.status.aggregateSnapshot.activeThreadCount}}</td></tr>'+
			'</table>',
		controller : function ($scope)
		{
			
			$scope.x = JSON.parse(elem.response);
			/*
			$scope.button = function (uri)
			{
				
		}
		
		
		/*
		
		Procesor($scope, $http) {
			$http.get("http://localhost:9090/nifi-api/flow/process-groups/root")
			.then(function(response)
			{	
				$scope.dane = response.data.processGroupFlow.flow.processors;
			})
	}*/
	
	
		}
	});
				