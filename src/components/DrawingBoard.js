import React, { Component } from "react";

class  DrawingBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            block: ''
        }
    }

    render() {
        return (<>
            <div id="container">
                <div className="slides">
                    {
                        this.props.items.map((item, i) => {
                            return(
                                <>
                                <div className="slide">{item.block}</div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>);
    }
}

export default DrawingBoard;