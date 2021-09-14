import { TextField, ThemeProvider, createTheme, InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';

import './Header.css'
import countries from '../../data/category'

const Header = ({category, setCategory}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:'#fff',
            },
          type: 'dark',
        },
      });
    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                <TextField id="standard-basic" label="standard"/>
                    <FormControl width={80}>
                    <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="select"
                    >
                        {countries.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                </ThemeProvider>
            </div>
        </div>
     );
}
 
export default Header;