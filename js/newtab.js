 var editor = ace.edit("editor");
 editor.setTheme("ace/theme/dracula");

 var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
 editor.session.setMode(new JavaScriptMode());

 editor.setOptions({
 	fontSize: "15pt"
 });

 document.getElementById('selector').addEventListener('change', (evt) => {
 	 JavaScriptMode = ace.require(`ace/mode/${evt.target.value}`).Mode;
 	 editor.session.setMode(new JavaScriptMode());
 });




