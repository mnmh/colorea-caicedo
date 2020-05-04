import React, { Component } from 'react';
import p5 from 'p5';

import Paleta from './Paleta';
import imagen from '../img/ilustraciones/descarga.png';


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            canvas: null
        }
    }

    componentDidMount() {
        let self = this;
        let drawingBoard;

        var s = function (p) {
            let img;
            let sW;

            let color = [255, 255, 255, 255];

            p.preload = function () {
                img = p.loadImage(self.props.img);
            }

            p.setup = function () {
                p.createCanvas(800, 621);
                drawingBoard = p.createGraphics(800, 621);
                p.background(255);
                p.image(img, 0, 0, 800, 621);
                sW = 20;
            }

            p.draw = function () {
                p.background(255);
                p.image(drawingBoard, 0, 0);
                p.image(img, 0, 0, 800, 621);
            }

            p.mouseDragged = function () {
                drawingBoard.stroke(color[0], color[1], color[2]);
                drawingBoard.strokeWeight(sW);
                drawingBoard.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            }

            p.changeColor = function (color_temp) {
                color = color_temp;
            }

            p.changeSize = function (size_temp) {
                sW = size_temp;
            }
        }

        var canvas_draw = new p5(s, 'canvas');

        this.setState({
            canvas: canvas_draw
        })

        let btns = document.getElementsByClassName('colorItem');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e) => {
                let btn_active = document.getElementsByClassName('btn_active');
                btn_active[0].classList.remove('btn_active');
                const color = e.target.getAttribute('data-color');
                canvas_draw.changeColor(color.split(','));
                e.target.classList.add('btn_active')
            })
        };

        btns = document.getElementsByClassName('size');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e) => {
                let size_active = document.getElementsByClassName('size_active');
                size_active[0].classList.remove('size_active');
                const size = e.target.getAttribute('data-size');
                canvas_draw.changeSize(size);
                e.target.classList.add('size_active')
            })
        };
    }

    componentWillUnmount() {
        this.state.canvas.remove();
    }

    descarga() {
        var canvas = document.getElementById("defaultCanvas0");
        var link = document.createElement('a');
        link.download = 'dibujo.png';
        link.href = canvas.toDataURL();
        link.click();
    }

    render() {
        return (
            <>
                <div className="paleta">
                    <Paleta color={[[30, 30, 30], [102, 102, 102], [170, 170, 170], [230, 230, 230], [255, 255, 255]]} />
                    <Paleta color={[[245, 232, 88], [247, 237, 121], [249, 241, 155], [251, 246, 188], [253, 250, 222]]} />
                    <Paleta color={[[144, 245, 88], [166, 247, 121], [188, 250, 155], [211, 251, 188], [233, 253, 222]]} />
                    <Paleta color={[[88, 177, 245], [121, 193, 247], [155, 209, 248], [188, 224, 251], [222, 239, 253]]} />
                    <Paleta color={[[163, 97, 72], [181, 128, 109], [200, 160, 144], [218, 192, 182], [237, 223, 218]]} />
                    <Paleta color={[[243, 166, 206], [245, 184, 216], [248, 202, 226], [250, 219, 235], [253, 237, 245]]} />
                    <Paleta color={[[240, 72, 72], [241, 109, 109], [243, 145, 145], [246, 182, 182], [250, 219, 218]]} />
                    <Paleta color={[[240, 166, 24], [243, 184, 70], [246, 202, 116], [249, 219, 163], [252, 237, 209]]} />
                    <Paleta color={[[197, 240, 24], [209, 243, 70], [220, 246, 116], [232, 249, 162], [243, 252, 209]]} />
                    <Paleta color={[[166, 24, 240], [184, 70, 243], [202, 116, 246], [219, 163, 249], [237, 209, 252]]} />
                    <Paleta color={[[40, 24, 240], [83, 70, 243], [126, 115, 246], [169, 163, 250], [212, 209, 253]]} />
                    <div className="bloque herramientas">
                        <div data-size="1" className="item size size_0"></div>
                        <div data-size="5" className="item size size_1"></div>
                        <div data-size="10" className="item size size_2"></div>
                        <div data-size="15" className="item size size_3"></div>
                        <div data-size="20" className="item size size_4 size_active"></div>
                    </div>

                    <div id="descarga">

                        <a id="descarga_btn" onClick={this.descarga} download="download" style={{ backgroundImage: `url(${imagen})` }}>
                        </a>
                    </div>
                </div>
                <div
                    id="canvas"
                ></div>

            </>
        );
    }
}

export default Canvas;