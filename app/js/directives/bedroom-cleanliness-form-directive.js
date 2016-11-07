'use strict';

module.exports = function (app) {
  app.directive('bedroomCleanlinessForm', function() {
    return {
      templateUrl: './views/templates/bedroom-condition-form.html'
    };
  });

};
