import React from 'react';

var opacity = [1, 0.8, 0.6, 0.4, 0.2];

var Paleta = props => {
    return(
        <>
        <div className="bloque color">
        {
            opacity.map((opa, i) => {
                return(
                    <div
                        className={(props.color[i][0] == 255 && props.color[i][1] == 255 && props.color[i][2] == 255) ? "item colorItem btn_active" : "item colorItem"}
                        style={{backgroundColor: `rgba(${props.color[i][0]},${props.color[i][1]},${props.color[i][2]})`}}
                        data-item={i}
                        data-color={`${props.color[i][0]},${props.color[i][1]},${props.color[i][2]}`}
                    ></div>
                )
            })
        }
        </div>
        </>
    );
}

export default Paleta;