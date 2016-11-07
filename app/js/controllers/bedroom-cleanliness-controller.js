'use strict';

module.exports = function (app) {
  app.controller('bathroomCleanlinessController', ['$http', '$location','ErrorService', function($http, $location, ErrorService){
    this.$http = $http;
    this.$location = $location;
  }]);

};
