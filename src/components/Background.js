import React from 'react';

var Background = props => {
    return(
        <>
            <div id="background" style={{backgroundImage: `url(${props.img})`}}>

            </div>
        </>
    )
}

export default Background;