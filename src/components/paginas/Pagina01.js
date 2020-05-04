import React, { Component } from "react";
import { TimelineMax, gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'


import titulo from '../../img/ilustraciones/titulo.png';
import back from '../../img/ilustraciones/back.png';
import logo from '../../img/ilustraciones/logo.png';
import hash from '../../img/ilustraciones/hash.png';

gsap.registerPlugin(CSSPlugin)

class Pagina01 extends Component {
    constructor(props) {
        super(props);

        this.tweenIntro = null;

        this.titulo_elem = null;
        this.subtitulo_elem = null;
        this.btm = null;
    }

    componentDidMount() {
        this.tweenIntro = new TimelineMax();
        this.tweenIntro.add('start')
            .fromTo(this.titulo_elem, 1, { autoAlpha: 0 }, { autoAlpha: 1 }, '+=1')
            .fromTo(this.subtitulo_elem, 0.25, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo(this.btm, 0.25, { autoAlpha: 0 }, { autoAlpha: 1 })
            ;
    }

    render() {
        return (
            <>
                <div className="slide pagina_01">
                    <div
                        className="back"
                        style={{ backgroundImage: `url(${back})` }}
                    ></div>
                    <div
                        className="titulo imgcontainer"
                        ref={div => this.titulo_elem = div}
                        style={{ backgroundImage: `url(${titulo})` }}
                    ></div>
                    <div
                        className="subtitulo imgcontainer"
                        ref={div => this.subtitulo_elem = div}
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>

                    <div
                        className="btm"
                        ref={div => this.btm = div}
                    >
                        <div
                            className="hash imgcontainer"
                            style={{ backgroundImage: `url(${hash})` }}
                        ></div>
                    </div>

                </div>
            </>
        );
    }
}

export default Pagina01;