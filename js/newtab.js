 var editor = ace.edit("editor");
 editor.setTheme("ace/theme/monokai");

 var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
 editor.session.setMode(new JavaScriptMode());

 editor.setOptions({
 	fontSize: "15pt"
 });

 document.getElementById('s1').addEventListener('change', (evt) => {
 	 JavaScriptMode = ace.require(`ace/mode/${evt.target.value}`).Mode;
 	 editor.session.setMode(new JavaScriptMode());
 });


 // var classname = document.getElementsByClassName("selector");
 // var myFunction = function() {
 // 	var attribute = this.getAttribute("data-myattribute");
 // 	JavaScriptMode = ace.require(`ace/mode/${attribute}`).Mode;
 // 	editor.session.setMode(new JavaScriptMode());
 // };

 // for (var i = 0; i < classname.length; i++) {
 // 	classname[i].addEventListener('click', myFunction, false);
 // }


 $.material.init();