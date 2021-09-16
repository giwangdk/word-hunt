import React from 'react';
import './Definitions.css'

const Definitions = ({word, meanings, category}) => {
    return (
        <div className="meanings">
            {word === "" ? (
                <span className="subTitle">Start by typing a word in search</span>
            ) : (
                    meanings.map((mean) => {
                        mean.meanings.map((item) => {
                            console.log(item);
                        })
                    })
            )}
        </div>
    );
}
 
export default Definitions;