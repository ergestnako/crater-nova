Package.describe({
  name: "crater"
});

Package.onUse(function(api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    
    'ecmascript',

    'nova:core',
    'nova:posts',
    'nova:users',
    // 'nova:base-components',
    'nova:email-templates',
    'nova:newsletter',
    // 'nova:forms-tags',
    // 'fourseven:scss@3.8.1',
    'static-html'
  ]);

  api.addFiles([
    'lib/head.html'
  ], ['server', 'client']);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

  // api.addFiles([
  //   'lib/stylesheets/main.scss',
  // ], ['client']);


});
