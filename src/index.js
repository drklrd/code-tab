import AceEditor from 'react-ace';
import brace from 'brace';
import React from 'react';
import ReactDOM from 'react-dom';

import 'brace/mode/javascript';
import 'brace/theme/cobalt';

import SelectComponent from './select';

class App extends React.Component{

	render(){
		return(
			<div className="row no-margin">
				<div className="col-xs-12">
					<AceEditor
						mode="javascript"
						theme="cobalt"
						width="100%"
						height="100vh"
						name="UNIQUE_ID_OF_DIV"
						editorProps={{$blockScrolling: true}}
					/>
				</div>
				<div className="floating font-20">
					<SelectComponent />
				</div>
				<div className="code-tab">
					code-tab
				</div>
			</div>

		)
	}

}


ReactDOM.render(<App/>,document.getElementById("app"));
