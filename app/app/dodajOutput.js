'use strict';

angular.
	module('nifiApp').controller('dodajOutputCtrl', function($scope, $http)
{
		//var dane = {"revision": {"version" :0}, "component" : {"name": $scope.nazwa}}

	
	$scope.Utworz = function()
		{
			$scope.uriGrupy = [];
			for (var i=0; i<grupy.length; i++)
				$scope.uriGrupy[i]= grupy[i].identifier +"\n";
		//var txt;
		var name = prompt("podaj nazwe portu wejscia", "");
		var grupa = prompt("zaznacz i skopiuj adres grupy w wyznaczone pole\n" + $scope.uriGrupy);
		var dane = {"revision": {"version" :0}, "component" : {"name": name}};
		if (name == "" || name == " ")
			{
				name = "to pole nie moze byc puste, musisz podac nazwe";
			}
		else if (name != null)
			{/*	
			$http({
				method : "POST",
				url : "http://localhost:9090/nifi-api/process-groups/873374a7-0162-1000-37b4-c7b6f77bfed4/input-ports",
				data : {"revision": {"version" :0}, "component" : {"name": name}},
				headers : {'Content-Type': 'application/json' }
			});
			}*/
	$http.post("http://localhost:9090/nifi-api" +grupa + "/output-ports", dane)
	.then(function(response)
	{
	console.log(response);
	location.reload();
	});
	}
	else 
		{
			alert("output port nie zostal utworzony");
		}
		}
		
})