import React, { Component } from 'react';
import './styles/source.scss';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import next from './img/nav/next.png';
import prev from './img/nav/prev.png';

import Pagina01 from './components/paginas/Pagina01';
import Pagina02 from './components/paginas/Pagina02';
import Pagina05 from './components/paginas/Pagina05';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 1
    }

    this.nextNav = this.nextNav.bind(this);
    this.prevNav = this.prevNav.bind(this);
  }

  nextNav() {
    var pagina = this.state.pagina;
    if (pagina < 3) {
      this.setState({
        pagina: pagina + 1
      })
    }
  }

  prevNav() {
    var pagina = this.state.pagina;
    if (pagina > 1) {
      this.setState({
        pagina: pagina - 1
      })
    }
  }

  render() {
    let block = <Pagina01 />
    if (this.state.pagina == 2) block = <Pagina02 />
    else if (this.state.pagina == 3) block = <Pagina05 />



    return (
      <div className="App">

        <BrowserView>

          {block}

          <div className="nav">
            <div
              className={(this.state.pagina > 1) ? 'prev active' : 'prev'}
              onClick={this.prevNav}
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${prev})` }}
              ></div>
              <div className="name">Anterior</div>
            </div>


            <div
              className={(this.state.pagina < 3) ? 'next active' : 'next'}
              onClick={this.nextNav}
            >
              <div
                className="icon"
                style={{ backgroundImage: `url(${next})` }}
              ></div>
              <div className="name">Siguiente</div>
            </div>
          </div>

        </BrowserView>

        <MobileView>
          Esta aplicación necesita una tablet o computador
        </MobileView>
      </div>
    );
  }

}

export default App;