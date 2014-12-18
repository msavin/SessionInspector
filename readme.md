# SessionInspector
 - Watch your sessions update reactively in the browser
 - Click on a session to console.log() it
 - Click on the title bar to hide the widget

# Get Started
 - To learn more, go to http://sessioninspector.meteor.com
 - To use, run "meteor add msavin:sessioninspector"

# Only for Chrome 33+
 - SessionInspector uses Object.observe() to keep track of the session keys. Currently, only Chrome 33+ supports this. I figured since most of are doing our main development through a new Chrome browser, this could slide. If someone knows of another way to implement reactive watching of the Session.keys, please let me know or feel free to fork the project.
