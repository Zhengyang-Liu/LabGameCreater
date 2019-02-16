import * as React from 'react';
import reactable from 'reactablejs';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/ActionCreators'

class PipetteImage extends React.Component<any, any>
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
                <img src="/images/pipette without fluid.svg" height={300} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectItem: (itemId: number) => dispatch(selectItem(itemId))
})

const ReactablePipette = reactable(connect(null, mapDispatchToProps)(PipetteImage));

class Pipette extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props;
    }
    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.props.item.transform.x += dx;
        this.props.item.transform.y += dy;
        this.forceUpdate();
    }

    render() {
        return (
            <ReactablePipette
                draggable
                onDragMove={this.handleDragMove}
                {...this.state.item}
            />
        )
    }
}

export default Pipette;

