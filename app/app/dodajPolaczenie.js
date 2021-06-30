'use strict';

angular.
	module('nifiApp').controller('dodajPolaczenieCtrl', function($scope, $http)
	{
		$scope.Utworz = function ()
		{
			
			var dane = {"revision":{"version":0},"component":
				{"source":{"id":$scope.zid,"type":$scope.ztype,"groupId":$scope.zgrupa,"name":$scope.zname},
				 "destination":{"id":$scope.cid,"type":$scope.ctype, "groupId":$scope.cgrupa,"name":$scope.cname},"selectedRelationships":[$scope.relation]}};
				 
				 $scope.uriGrupy = [];
			for (var i=0; i<grupy.length; i++)
				$scope.uriGrupy[i]= grupy[i].identifier +"\n";
		var grupa = prompt("zaznacz i skopiuj adres grupy w wyznaczone pole\n" + $scope.uriGrupy);
				 
				 $http.post("http://localhost:9090/nifi-api" +grupa +"/connections", dane)
			.then(function(response)
				  {
					console.log(response);
					location.reload();
				});
		}
		
		
		
		
		
	});