'use strict';

angular.
	module('nifiApp').controller('dodajProcesorCtrl', function($scope, $http) 
	{
		$scope.typy=[];
		$scope.proctype= [];
		$scope.proctype1= [];
		
		$scope.Utworz = function()
		{
			
			$scope.uriGrupy = [];
			for (var i=0; i<grupy.length; i++)
				$scope.uriGrupy[i]= grupy[i].identifier +"\n";

			var grupa = prompt("zaznacz i skopiuj adres grupy w wyznaczone pole\n" + $scope.uriGrupy);
			
			
			$http.get("http://localhost:9090/nifi-api/flow/processor-types")
			.then(function(response)
		{
				for( var i=0; i<response.data.processorTypes.length; i++)
					{
						
						$scope.typy[i] = response.data.processorTypes[i].type;
						//console.log(typy[i]);
						
					}
					
		
		for (var i=0; i<$scope.typy.length;i++)
		{
				$scope.proctype[i]= $scope.typy[i]+"\n";
		}	
		
			
			console.log($scope.proctype.length);
			
			
			var newproctype = prompt($scope.proctype);
			var dane = {"revision": {"version":0},	"component": {"type": newproctype}};
			
			if (grupa == " " || grupa =="")
				alert("procesor nie został utworzony");
			else if (newproctype != null && grupa != null )
			{
				$http.post("http://localhost:9090/nifi-api"+ grupa +"/processors", dane)
				.then(function(response)
					{
						console.log(response);
						location.reload();
					});
			}
			else 
			{
			alert("procesor nie zostala utworzona");
		}
				
		})
	}})
	
		