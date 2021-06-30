'use strict';

angular.
	module('nifiApp').controller('konfiguracjaCtrl', function($scope, $http)
	{
		//console.log($scope.stale.properties);
		//$scope.stale.properties = {};
		$scope.submit = function (uri, clientId, ver, id)
		{
			
			var dane = {"revision": {"clientId" : clientId, "version" : ver},"component":{"id": id,  "config":{"properties": $scope.prop, "schedulingPeriod":$scope.stale.schedulingPeriod ,"schedulingStrategy":$scope.stale.schedulingStrategy,"executionNode":$scope.stale.executionNode,"penaltyDuration":$scope.stale.penaltyDuration,"yieldDuration":$scope.stale.yieldDuration,"bulletinLevel":$scope.stale.bulletinLevel,"runDurationMillis":$scope.stale.runDurationMillis,"concurrentlySchedulableTaskCount":$scope.stale.concurrentlySchedulableTaskCount,"comments":$scope.stale.comments}}};
			
			
			$http.put(uri, dane)
			.then(function(response)
			{
				console.log(response);
				location.reload();
			});
			//console.log($scope.stale.properties);			//console.log(dane);
			
		}
		$scope.zapisz = function (key, value)
		{
			console.log(value);
			console.log(key);
			$scope.prop[key] =value;
			console.log($scope.prop);
		}
		
	});
	/*
	{
  "revision": {
    "clientId": "841b628b-0168-1000-16cc-e055e52c7e6a",
    "version": 17
  },
  "id": "22649e02-0168-1000-ece3-bf47145bbef7",
  "component": {
    "id": "22649e02-0168-1000-ece3-bf47145bbef7",
    "config": {
      "properties": {
        "File Size": "10kb",
        "Batch Size": "1",
        "Data Format": "Text",
        "Unique FlowFiles": "false",
        "generate-ff-custom-text": null,
        "character-set": "UTF-8"
      },
      
      "schedulingPeriod": "5 sec",
      "schedulingStrategy": "TIMER_DRIVEN",
      "executionNode": "ALL",
      "penaltyDuration": "30 sec",
      "yieldDuration": "1 sec",
      "bulletinLevel": "WARN",
      "runDurationMillis": 0,
      "concurrentlySchedulableTaskCount": 1,
      "comments": "",
      
    }
  },

  
}
	
	*/