const path = require('path');
module.exports = {
  method: 'GET',
  path: '/',
  options: {
    handler: (request, h) => {
      return h.file(path.join(process.cwd(), 'static', 'index.html'));
    }
  }
};
