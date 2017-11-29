import React from 'react';
import ReactDOM from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class App extends React.Component{

	render(){
		return(
			<div className="container-fluid">
		       <div className="row">
				   <div className="col-xs-12">
						<AceEditor
							mode="javascript"
							theme="monokai"
							width="100%"
							height="100vh"
							name="UNIQUE_ID_OF_DIV"
							editorProps={{$blockScrolling: true}}
						/>
				   </div>
			   </div>
			</div>

		)
	}

}


ReactDOM.render(<App/>,document.getElementById("app"));
