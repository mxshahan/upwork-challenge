'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJwt = exports.jwtVerify = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = _config2.default.get('secret');

var jwtVerify = function jwtVerify(token) {
  return new Promise(function (resolve, reject) {
    (0, _jsonwebtoken.verify)(token.replace('JWT ', ''), secret, function (err, decoded) {
      if (err || !decoded) {
        reject(err);
      }
      resolve(decoded);
    });
  });
};

var generateJwt = function generateJwt(data) {
  return (0, _jsonwebtoken.sign)(data, secret, { expiresIn: '12h' });
};

exports.jwtVerify = jwtVerify;
exports.generateJwt = generateJwt;