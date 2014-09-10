/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      wu.getConditions($scope.zip).then(function(response){

        $scope.tempF = response.data.current_observation.temp_f;
        $scope.feelsLike = response.data.current_observation.feelslike_f;
        $scope.historyUrl = response.data.current_observation.history_url;

        $('#zip').focus();
      });
    };
  }]);
})();
