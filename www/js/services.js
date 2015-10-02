angular.module('sfcpar.services', [])

.service('apiService', function($http) {
  var self = this;

  self.getMerchants = function() {
   var dfd = $.Deferred();
    // $http.get('https://sheetlabs.com/CW/sf_chinatown_parkandride_merchants') // NOTE: Online mode
    $http.get('merchants.json') // NOTE: Offline mode
      .then(function(response) {
        console.log("getMerchants: success");
        console.log(response.data.length + " merchants retrieved.");
        dfd.resolve(response.data);
      },
     function (response) {
        console.log("getMerchants: fail");
        dfd.reject();
     });
     return dfd;
  };

  self.getMerchantsByCategory = function(category) {
    var dfd = $.Deferred();
    if (category.indexOf('&') > -1) {
      category = category.replace('&', encodeURIComponent('&'));
    }

    $http.get('https://sheetlabs.com/CW/sf_chinatown_parkandride_merchants?category=' + category)
      .then(function(response) {
        console.log("getMerchantsByCategory: success");
        console.log(response.data.length + " merchants retrieved.");
        dfd.resolve(response.data);
      },
     function (response) {
        console.log("getMerchantsByCategory: fail");
        dfd.reject();
     });
     return dfd;
  };
});
