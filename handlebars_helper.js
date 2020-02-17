const Handlebars = require('handlebars')

Handlebars.registerHelper('ifEq', function (arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});