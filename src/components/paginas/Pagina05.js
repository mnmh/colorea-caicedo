import React, { Component } from "react";
import { TimelineMax } from 'gsap';

import Canvas from '../Canvas';

import imagen from '../../img/canvas/RENDER_01.png';

class Pagina05 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="slide canvas">
                    <Canvas img={imagen} />
                </div>
            </>
        );
    }
}

export default Pagina05;