import { TextField, ThemeProvider, createTheme, MenuItem } from '@material-ui/core';
import React from 'react';

import './Header.css'
import countries from '../../data/category'

const Header = ({category, setCategory, word, setWord, meanings, setMeanings}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:'#fff',
            },
          type: 'dark',
        },
    });
    
    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("")
    }

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" className="search" label="Search a word" value={word} onChange={(e) => setWord(e.target.value)}/>
                    <TextField
                        select
                        label="Language"
                        value={category}
                        className="select"
                        onChange={(e)=>handleChange(e)}
                    >
                        {countries.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
     );
}
 
export default Header;