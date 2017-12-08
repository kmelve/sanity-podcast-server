const path = require('path');
module.exports = {
  method: 'GET',
  path: '/{param*}',
  options: {
    handler: (request, h) => {
      return h.file(path.join(process.cwd(), 'static', request.params.param));
    }
  }
};
