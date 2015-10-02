angular.module('sfcpar.controllers', ['sfcpar.services'])

.controller('mainCtrl', function($scope, apiService) {

  $scope.curMerchants = [];
  $scope.curCategory = 'Restaurants';

  $scope.getMerchants = function() {
    apiService.getMerchants().then(function(data) {
      console.log("Got " + data.length + " merchants");
      $scope.curMerchants = data;
    });
  };

  $scope.getMerchantsByCategory = function(selectedCategory) {
    console.log("Selected Category is now: " + selectedCategory);
    apiService.getMerchantsByCategory($scope.curCategory).then(function(data) {
      $scope.curMerchants = data;
    });
  };

});
