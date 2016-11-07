'use strict';

module.exports = function(app){
  require('./bedroom-cleanliness-controller.js')(app);
  require('./bedroom-condition-form.js')(app);
  require('./bathroom-cleanliness-form.js')(app);
  require('./bathroom-condition-form.js')(app);
};
