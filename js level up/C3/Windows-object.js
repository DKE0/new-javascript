var msg = '<h2>browser window </h2> <p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: '+ window.innerHeight + '</p>';

// Number of items in history object for browser window or tab
msg += '<h2> history </h2> <p>items: ' + window.history.length + '</p>';

// computer screen width and height
msg += '<h2> screen </h2> <p>width: ' + window.screen.width + '</p>';
msg += '<p> height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

// Now we create a Dialog box that show web page location
alert('current Page: '+ window.location);
