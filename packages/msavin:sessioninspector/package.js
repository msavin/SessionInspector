Package.describe({
  name:    'msavin:sessioninspector',
  summary: 'View and edit all your session variables in the browser.',
  version: '1.2.0',
  git:     'https://github.com/msavin/SessionInspector.git',
  debugOnly: true
});

Package.onUse(function(api) {

  var clientFiles = [
  	"sessioninspector.html",
  	"sessioninspector.css",
  	"sessioninspector.js"
  ];

  api.versionsFrom('1.0');
  api.use(['templating','tracker','session'], 'client');
  api.add_files(clientFiles);

});