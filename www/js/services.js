angular.module('sfcpar.services', [])

.service('apiService', function($http) {
  var self = this;

  var selectedCategory = 'Restaurants';

  self.getMerchants = function() {
    $http.get('https://sheetlabs.com/CW/sf_chinatown_parkandride_merchants')
      .then(function(response) {
        console.log("getMerchants: success");
        console.log(response.data.length + " merchants retrieved.");
        response.data.forEach(function(obj) {
          $("#merchants").append("<li>" + obj.name + "</li>");
        });
      },
     function (response) {
        console.log("getMerchants: fail");
     });
  };

  self.getMerchantsByCategory = function(category) {
    if (category.indexOf('&') > -1) {
      category = category.replace('&', encodeURIComponent('&'));
    }

    $http.get('https://sheetlabs.com/CW/sf_chinatown_parkandride_merchants?category=' + category)
      .then(function(response) {
        console.log("getMerchantsByCategory: success");
        console.log(response.data.length + " merchants retrieved.");

        $("#merchants").html(""); // clear
        response.data.forEach(function(obj) {
          $("#merchants").append("<li>" + obj.name + "</li>");
        });
      },
     function (response) {
        console.log("getMerchantsByCategory: fail");
     });
  };
});
