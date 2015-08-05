var request = require('superagent');

require('superagent-cors-proxy')(request, null, window.parent);
