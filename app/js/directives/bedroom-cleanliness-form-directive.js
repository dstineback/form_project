'use strict';

module.exports = function (app) {
  app.directive('bedroomCleanlinessFormDirective', function() {
    return {
      templateUrl: './views/templates/bedroom-cleanliness.html'
    };
  });

};
