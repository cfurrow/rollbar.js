var notifier = require('../notifier');
var Notifier = notifier.Notifier;

notifier.init(JSON);

if (!window._rollbarInitialized) {
  var config = window._rollbarConfig || {};
  var alias = config.globalAlias || 'Rollbar';
  var shim = window[alias];
  var fullRollbar = new Notifier(shim);

  fullRollbar._processShimQueue(window._rollbarShimQueue || []);
  window._rollbarInitialized = true;

  Notifier.processPayloads();
}

module.exports = fullRollbar
