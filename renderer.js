// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var version = jQuery.fn.jquery
var text = '<h2>jQuery version is' + version + '</h2>'
jQuery('#version').html(text)
