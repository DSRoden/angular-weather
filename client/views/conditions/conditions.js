/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      var url = 'http://api.wunderground.com/api/66488bb7d2153c7a/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        console.log(response);
        $scope.tempF = response.data.current_observation.temp_f;
        $scope.feelsLike = response.data.current_observation.feelslike_f;
        $('#zip').focus();
      });
    };
  }]);
})();
