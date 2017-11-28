 var editor = ace.edit("editor");
 editor.setTheme("ace/theme/monokai");

 var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
 editor.session.setMode(new JavaScriptMode());

 editor.setOptions({
 	fontSize: "15pt"
 });


 function changeLanguage(){
 	alert(8)
 }

 document.getElementById('selector').addEventListener('change', () => {
 	alert(88)

 });