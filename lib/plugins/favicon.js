exports.plugin = {
  name: 'favicon',
  register: (server, options) => {
      // Assuming the Inert plugin was registered previously
      server.path(__dirname + '../static');
      server.route({ path: '/favicon.ico', method: 'GET', handler: { file: './favicon.ico' } });
  }
};
