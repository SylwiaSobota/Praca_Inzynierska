'use strict';

angular.
	module('nifiApp').controller('runCtrl', function($scope, $http)
	{
		$scope.Run = function (clientId, ver, id, uri)
		{
			var stat = "RUNNING"
			var dane = {"revision":{"clientId": clientId,  "version": ver}, "id":id,"component":{"id": id, "state": stat}};
			$http.put(uri, dane)
			.then(function(response)
			{
				console.log(response);
				location.reload();
			});
			console.log(uri);
			
		}
		$scope.Stop = function (clientId, ver, id, uri)
		{
			var stat = "STOPPED"
			var dane = {"revision":{"clientId": clientId,  "version": ver}, "id":id,"component":{"id": id, "state": stat}};
			$http.put(uri, dane)
			.then(function(response)
			{
				console.log(response);
				location.reload();
			});
			console.log(uri);
			
		}
	})
	
	/*  {
  "revision": {
    "clientId": "725c7f87-0168-1000-7782-535429fe814b",
    "version": 10
  },
  "id": "72379dff-0168-1000-0798-0e811d8d4c92",
  "uri": "http://localhost:9090/nifi-api/output-ports/72379dff-0168-1000-0798-0e811d8d4c92",
  "position": {
    "x": 1160.9013671875,
    "y": -764.0301513671875
  },
  "permissions": {
    "canRead": true,
    "canWrite": true
  },
  "bulletins": [],
  "component": {
    "id": "72379dff-0168-1000-0798-0e811d8d4c92",
    "parentGroupId": "873374a7-0162-1000-37b4-c7b6f77bfed4",
    "position": {
      "x": 1160.9013671875,
      "y": -764.0301513671875
    },
    "name": "TestOutput",
    "state": "STOPPED",
    "type": "OUTPUT_PORT",
    "transmitting": false,
    "concurrentlySchedulableTaskCount": 1,
    "userAccessControl": [],
    "groupAccessControl": []
  },
  "status": {
    "id": "72379dff-0168-1000-0798-0e811d8d4c92",
    "groupId": "873374a7-0162-1000-37b4-c7b6f77bfed4",
    "name": "TestOutput",
    "transmitting": false,
    "runStatus": "Stopped",
    "statsLastRefreshed": "22:49:15 CET",
    "aggregateSnapshot": {
      "id": "72379dff-0168-1000-0798-0e811d8d4c92",
      "groupId": "873374a7-0162-1000-37b4-c7b6f77bfed4",
      "name": "TestOutput",
      "activeThreadCount": 0,
      "flowFilesIn": 0,
      "bytesIn": 0,
      "input": "0 (0 bytes)",
      "flowFilesOut": 0,
      "bytesOut": 0,
      "output": "0 (0 bytes)",
      "runStatus": "Stopped"
    }
  },
  "portType": "OUTPUT_PORT"
}*/