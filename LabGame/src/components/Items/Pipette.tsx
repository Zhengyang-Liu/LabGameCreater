import * as React from 'react';
import reactable from 'reactablejs'
import Tool from './Tool'

interface Transfrom {
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number,
}

class PipetteImage extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div style={{
                position: 'relative',
                left: this.props.x,
                top: this.props.y,
                width: this.props.width,
                height: this.props.height,
                background: 'grey',
                transform: `rotate(${this.props.angle}deg)`,
            }}
                ref={this.props.getRef}>
                <img src="/images/pipette without fluid.svg" height={100} width={100} />
            </div>
        );
    }
}

const ReactableChild = reactable(PipetteImage)

class Pipette extends Tool {

    constructor(props: any) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            width: 50,
            height: 140,
            angle: 0,
        }
    }
    handleDragMove = (e) => {
        const { dx, dy } = e
        this.setState(state => ({
            x: state.x + dx,
            y: state.y + dy,
        }))
    }

    saveData(){
        return this.state;
    }

    render() {
        return (
            <ReactableChild
                draggable
                resizable={{
                    edges: { left: true, right: true, bottom: true, top: true }
                }}
                onDragMove={this.handleDragMove}
                {...this.state}
            />
        )
    }
}

export default Pipette;

