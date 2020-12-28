// var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'TestEncrypt', 'coolMethod', [arg0]);
// };

// Empty constructor
function TestEncrypt() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
TestEncrypt.prototype.encrypt = function(message, publicKey, successCallback, errorCallback) {
//   var options = {};
//   options.message = message;
//   options.publicKey = publicKey;
  cordova.exec(successCallback, errorCallback, 'TestEncrypt', 'encrypt', [message,publicKey]);
}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
TestEncrypt.prototype.decrypt = function(message, privateKey, successCallback, errorCallback) {
    // var options = {};
    // options.message = message;
    // options.privateKey = privateKey;
    cordova.exec(successCallback, errorCallback, 'TestEncrypt', 'decrypt', [message,privateKey]);
  }

// Installation constructor that binds EntelFingerPlugin to window
TestEncrypt.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.TestEncrypt = new TestEncrypt();
  return window.plugins.TestEncrypt;
};
cordova.addConstructor(TestEncrypt.install);