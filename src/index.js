import AceEditor from 'react-ace';
import React from 'react';
import ReactDOM from 'react-dom';
import SelectComponent from './select';
import { split } from 'react-ace';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import './acemodes';

class App extends React.Component{

	constructor(props){
        super(props);
		this.state = {
			mode : 'python',
			fontSize : 20
		};
        this.updateMode = this.updateMode.bind(this);
        this.alterFontSize = this.alterFontSize.bind(this);
    }

	updateMode(mode){
        this.refs['editor'].editor.session.setMode(`ace/mode/${mode}`);
	}

	alterFontSize(upDown){
		let editorInstance = this.refs['editor'].editor;
		let updatedSize = upDown == 'up' ? editorInstance.getFontSize() + 5 : editorInstance.getFontSize() - 5;
        editorInstance.setOptions({
            fontSize: updatedSize
		});
	}

	render(){
		let codeTab = '<code-tab/>';
		return(
			<div className="row no-margin">
				<div className="col-xs-12">
					<AceEditor
						ref={"editor"}
						splits={2}
						showPrintMargin={false}
    					orientation="beside"
						fontSize={this.state.fontSize}
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
				<div className="floating-buttons font-large">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<Button raised onClick={()=>{this.alterFontSize('up')}}>
								Size &nbsp;
								<Icon>add_circle</Icon>
							</Button>
						</div>
						<div className="col-xs-12 col-sm-6">
							<Button raised onClick={()=>{this.alterFontSize('down')}}>
								Size &nbsp;
								<Icon>remove_circle</Icon>
							</Button>
						</div>
					</div>

				</div>
				<div className="code-tab">
					<span> {codeTab} </span>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById("app"));
