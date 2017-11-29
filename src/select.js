import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import React from 'react';

const languages = ['javascript','python'];

export default class SelectComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selection : this.props.mode
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            selection : event.target.value
        });
        this.props.updateMode(event.target.value);
    }

    render(){
        let languagesList = languages.map((language,index)=>{
            return (
                <MenuItem key={index} value={language}>{language}</MenuItem>
            );
        })
        return(
            <FormControl>
                <Select value={this.state.selection} onChange={this.handleChange}  input={<Input name="language" id="language" />} >
                    {languagesList}
                </Select>
                <FormHelperText>
                    Select language of your choice
                </FormHelperText>
            </FormControl>
        );
    }
}
