import * as React from 'react';
import reactable from 'reactablejs'
import Tool from './Tool'

interface transfrom {
    x: number,
    y: number,
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
    constructor(props: transfrom) {
        super(props);
        this.state = props;
    }
    handleDragMove = (e) => {
        const { dx, dy } = e
        this.setState(state => ({
            x: state.x + dx,
            y: state.y + dy,
        }))
    }

    render() {
        return (
            <ReactableChild
                draggable
                onDragMove={this.handleDragMove}
                {...this.state}
            />
        )
    }
}

export default Pipette;

