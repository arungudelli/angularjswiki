self.importScripts('sw-toolbox.js');

self.toolbox.precache([
  '/offline',
]);

// self.toolbox.router.get('/*', toolbox.networkFirst);

self.toolbox.router.get('/(.*)', function(request, values, options) {
  return toolbox.networkFirst(request, values, options).catch(function(error) {
    if (request.method === 'GET' && request.headers.get('accept').includes('text/html')) {
      return toolbox.cacheOnly(new Request('/offline'), values, options);
    }
    throw error;
  });
});