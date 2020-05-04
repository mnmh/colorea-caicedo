import React, { Component } from "react";
import { TimelineMax } from 'gsap';

import back from '../../img/ilustraciones/back_2.png';
import back_texto from '../../img/ilustraciones/back.svg';

class Pagina02 extends Component {
    constructor(props) {
        super(props);

        this.hola = null;
        this.tweenIntro = null;
    }

    componentDidMount() {
        this.tweenIntro = new TimelineMax();
        this.tweenIntro.add('start')
            .fromTo(this.hola, 0.5, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 }, '+=0.5')
            ;
    }

    render() {
        return (
            <>
                <div className="slide pagina_02">
                    <div
                        className="back"
                        style={{ backgroundImage: `url(${back})` }}
                    ></div>
                    <div
                        className="texto"
                        ref={div => this.hola = div}
                        style={{ backgroundImage: `url(${back_texto})` }}
                    >
                        <p>¡Han pasado tantas y tantas historias en el Puente el Vaho de Anocozca! ¡Está tan lleno de memorias! ¿Sabes la historia y los hechos que allí se conmemoran? Nuestros padres y abuelos caicedeños defendieron de manera Noviolenta la cosecha de café en años de violencia. Ellos, marcharon hasta el puente para decirle a los violentos que nuestras cargas de café debían pasar por el Vaho porque ese café es la base de nuestra economía. Todos juntos defendieron la cosecha y fueron hasta el Puente con camisas blancas a defenderlo, a defender el fruto de su trabajo. En el año 2002, la marcha de la Noviolencia llegó al Puente el Vaho de Anocozca. El gobernador de entonces Guillermo Gaviria y el comisionado de Paz Gilberto Echeverri, llegaron también a ese puente y lo cruzaron con la esperanza de que la Noviolencia conmoviera a los grupos armados de avanzar hacia la Paz. El 21 de abril los vimos atravesar el puente y no regresar. Desde entonces, y para seguir resistiendo ante los actos violentos, conmemoramos el día por la vida.</p>
                        <p>No celebramos la muerte ni la violencia. Somos constructores de paz.</p>
                        <p><b>Te invitamos a que nos tomemos el Puente el Vaho con colores y a que escribas mensajes en el cielo de Caicedo.</b></p>
                    </div>
                </div>
            </>
        );
    }
}

export default Pagina02;