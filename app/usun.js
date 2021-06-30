'use strict';

angular.
	module('nifiApp').controller('usunCtrl', function($scope, $http)
	{
		$scope.Usun = function (uri, ver)
		{
			$http.delete(uri +"?version="+ver)
			.then(function(response)
			{
				console.log(response);
				location.reload();
			});
			console.log(uri);
			console.log(ver);
		}
		
	})