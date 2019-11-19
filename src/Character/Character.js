import React from 'react';

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  };

const character = (props) => {
	return (
		<div style={style} onClick={props.click} > 
        <p>{props.character}</p>
    </div>	
)
};

export default character; 