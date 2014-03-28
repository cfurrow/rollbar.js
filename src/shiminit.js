var defaultRollbarJsUrl = '//d37gvrvc0wt4s1.cloudfront.net/js/v1.0/rollbar.min.js';
_rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl || defaultRollbarJsUrl;
Rollbar.init(window, _rollbarConfig);
