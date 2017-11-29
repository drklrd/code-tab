import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import React from 'react';

const languages = ['javascript','python'];

export default class SelectComponent extends React.Component{

    render(){

        let languagesList = languages.map((language)=>{
            return (
                <MenuItem value={language}>{language}</MenuItem>
            );
        })

        return(
            <FormControl>
                <InputLabel htmlFor="language">Language</InputLabel>
                <Select value={"javascript"} input={<Input name="language" id="language" />}
                >
                    {languagesList}
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
        );
    }
}
