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