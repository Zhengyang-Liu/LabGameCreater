import * as React from 'react';
import reactable from 'reactablejs';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/ActionCreators';
import { Transform } from '../../interfaces';

class ContainerImage extends React.Component<any, any>
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
                <img src="/images/container with fluid.svg" height={200} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectItem: (itemId: number) => dispatch(selectItem(itemId))
})

const ReactableChild = reactable(connect(null, mapDispatchToProps)(ContainerImage));

class Container extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            x: this.props.item.transform.x,
            y: this.props.item.transform.y
        }
    }

    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.props.item.transform.x +=dx;
        this.props.item.transform.y +=dy;
        this.forceUpdate();
    }

    render() {
        return (
            <ReactableChild
                draggable
                onDragMove={this.handleDragMove}
                {...this.props.item}
            />
        )
    }
}

export default Container;

