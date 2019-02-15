import * as React from 'react';
import reactable from 'reactablejs'
import Tool from './Tool'
import { connect } from 'react-redux';
// import { selectItem } from '../../redux/ActionCreators'

interface transform {
    x: number,
    y: number,
    angle: number,
}

class PipetteImage extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    handleClick() {
        alert("Click");
    }

    render() {
        return (
            <div
                // onClick={() => selectItem(this.props.id)}
                style={{
                    position: 'relative',
                    left: this.props.transform.x,
                    top: this.props.transform.y,
                    display: "inline-block",
                    background: 'transparent',
                    transform: `rotate(${this.props.transform.angle}deg)`,
                }}
                ref={this.props.getRef}>
                <img src="/images/pipette without fluid.svg" height={300} />
            </div>
        );
    }
}

const ReactableChild = reactable(PipetteImage)

class Pipette extends Tool {
    constructor(props: transform) {
        super(props);
        this.state = props;
    }
    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.setState(state =>({
            transform: {
                x: state.transform.x + dx,
                y: state.transform.y + dy,
            }
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

// const mapDispatchToProps = (dispatch) => ({
//     selectItem: (itemId: number) => { dispatch(selectItem(itemId)) }
// })

export default Pipette;

