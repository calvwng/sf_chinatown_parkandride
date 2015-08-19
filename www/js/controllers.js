angular.module('sfcpar.controllers', ['sfcpar.services'])

.controller('mainCtrl', function($scope, apiService) {

  $scope.getMerchants = function() {
    apiService.getMerchants();
  };

  $scope.getMerchantsByCategory = function(selectedCategory) {
    console.log("Selected Category is now: " + selectedCategory);
    apiService.selectedCategory = selectedCategory;
    apiService.getMerchantsByCategory(apiService.selectedCategory);
  };

});
