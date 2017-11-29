import AceEditor from 'react-ace';
import React from 'react';
import ReactDOM from 'react-dom';
import SelectComponent from './select';
import { split } from 'react-ace';

import './acemodes';

class App extends React.Component{

	constructor(props){
        super(props);
		this.state = {
			mode : 'python'
		};
        this.updateMode = this.updateMode.bind(this);
    }

	updateMode(mode){
		this.setState({
			mode
		});
	}

	render(){
		let codeTab = '<code-tab/>';
		return(
			<div className="row no-margin">
				<div className="col-xs-12">
					<AceEditor
						splits={2}
    					orientation="beside"
						fontSize="20px"
						mode={this.state.mode}
						theme="cobalt"
						width="100%"
						height="100vh"
						name="UNIQUE_ID_OF_DIV"
						editorProps={{$blockScrolling: true}}
					/>
				</div>
				<div className="floating font-large">
					<SelectComponent mode={this.state.mode} updateMode={this.updateMode}/>
				</div>
				<div className="code-tab">
					<span> {codeTab} </span>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById("app"));
