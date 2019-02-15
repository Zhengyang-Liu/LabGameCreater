import * as React from 'react';
import reactable from 'reactablejs'
import Tool from './Tool'
import { connect } from 'react-redux';
import { selectItem } from '../../redux/ActionCreators'
import { Transform } from '../../interfaces'


class TubeImage extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    handleClick() {
        this.props.selectItem(this.props.id);
    }

    render() {
        return (
            <div
                onClick={() => this.handleClick()}
                style={{
                    position: 'relative',
                    left: this.props.transform.x,
                    top: this.props.transform.y,
                    display: "inline-block",
                    background: 'transparent',
                    transform: `rotate(${this.props.transform.angle}deg)`,
                }}
                ref={this.props.getRef}>
                <img src="/images/open centrifuge tube without fluid.svg" height={100} />
            </div>
        );
    }
}

const ReactableChild = reactable(TubeImage)

class Tube extends Tool {
    constructor(props: Transform) {
        super(props);
        this.state = props;
    }
    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.setState(state => ({
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

const mapDispatchToProps = (dispatch) => ({
    selectItem: (itemId: number) => dispatch(selectItem(itemId))
})

export default connect(null, mapDispatchToProps)(Tube);

