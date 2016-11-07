'use strict';

const angular = require('angular');
const ngRoute = ngRoute('angular');
const app = angular.module('HotelFormApp', [ngRoute]);

require('./controllers')(app);
require('./directives')(app);
require('./services')(app);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/templates/bedroom-cleanliness.html',
    controller: 'bathroomCleanlinessController',
    controllerAS: 'bcc'
  })
  .otherwise({
    redirectTo: '/'
  });
});
