'use strict';

angular.
	module('nifiApp').
	component('nifi', {
		template: 		
		'<h3>Dane komponentów</h3>'+
			'<div ng-controller="usunCtrl"><a href ng-click="Usun(x.uri, x.revision.version)">Usuń</a></div>	'+	
			'<div ng-controller="runCtrl"><a href ng-click="Run(x.revision.clientId, x.revision.version, x.id, x.uri)">Uruchom</a></div>'+	
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
			'</table>'+
			'<a href ng-click="konfiguracja()">Szczegóły konfiguracji (dotyczy tylko procesorów)</a>'+  	
			'<div ng-show="showMe">'+
			'<table>'+
			'<div ng-controller="konfiguracjaCtrl">'+
			'<tr ng-repeat="(key, value) in stale.properties">'+
			'<td>{{key}} </td> <td> <input type="text" name="value" ng-model="value" ng-value="value"></td><td><div ng-controller="konfiguracjaCtrl"><a href ng-click="zapisz(key, value)">Zapisz</a></div></td>'+
			'<tr></div>'+
			'<tr><td>Scheduling Period </td> <td> <input type="text" name="schedulingPeriod" ng-model="stale.schedulingPeriod"> </td></tr>'+
			'<tr><td>Scheduling Strategy </td> <td><input type="text" name="schedulingStrategy" ng-model="stale.schedulingStrategy"> </td></tr>'+
			'<tr><td>Execution Node </td> <td><input type="text" name="executionNode" ng-model="stale.executionNode"> </td></tr>'+
			'<tr><td>Penalty Duration </td> <td><input type="text" name="penaltyDuration" ng-model="stale.penaltyDuration"> </td></tr>'+
			'<tr><td> Yield Duration</td> <td><input type="text" name="yieldDuration" ng-model="stale.yieldDuration"></td></tr>'+
			'<tr><td> Bulletin Level</td> <td><input type="text" name="bulletinLevel" ng-model="stale.bulletinLevel"> </td></tr>'+
			'<tr><td> Run Duration Millis</td> <td><input type="text" name="runDurationMillis" ng-model="stale.runDurationMillis"></td></tr>'+
			'<tr><td> Concurrently Schedulable Task Count </td> <td> <input type="text" name="concurrentlySchedulableTaskCount" ng-model="stale.concurrentlySchedulableTaskCount"></td></tr>'+
			'<tr><td> Comments </td> <td><input type="text" name="comments" ng-model="stale.comments "></td></tr>'+
			'</table>'+			
			'<div ng-controller="konfiguracjaCtrl"><a href ng-click="submit(x.uri, x.revision.clientId, x.revision.version, x.id)">Wyślij</a></div>'+
			'</div>'+
			
			'</div>',	
			controller: function ($scope)
		{
			scope = $scope;
			$scope.x = scope.x;				
			console.log($scope.x);
			$scope.konfiguracja = function()
		{
			$scope.showMe= !$scope.showMe;
		}
			$scope.stale = scope.stale;
			console.log($scope.stale);
			$scope.prop = { };
			
			

		}
		
		
		
	
	
		
	});
				