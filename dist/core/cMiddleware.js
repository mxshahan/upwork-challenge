'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  if (process.env.NODE_ENV === 'production') {
    app.use((0, _compression2.default)());
    app.use((0, _helmet2.default)());
  } else if (process.env.NODE_ENV === 'development') {
    app.use((0, _morgan2.default)('dev'));
  }

  app.use((0, _cors2.default)());
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
};