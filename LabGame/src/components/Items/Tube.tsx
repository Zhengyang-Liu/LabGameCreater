import * as React from 'react';
import reactable from 'reactablejs';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/ActionCreators'
import * as Types from '../../types'

type State = {}
type Props = {
    selectItem: Function,
    item: Types.Item
    getRef: string
}

class TubeImage extends React.Component<Props, State>
{
    constructor(props: any) {
        super(props);
    }

    handleClick() {
        this.props.selectItem(this.props.item);
    }

    render() {
        return (
            <div
                onClick={() => this.handleClick()}
                style={{
                    position: 'relative',
                    left: this.props.item.transform.x,
                    top: this.props.item.transform.y,
                    display: "inline-block",
                    background: 'transparent',
                    transform: `rotate(${this.props.item.transform.angle}deg)`,
                }}
                ref={this.props.getRef}>
                <img src="/images/open centrifuge tube without fluid.svg" height={100} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

const ReactableChild = reactable(connect(null, mapDispatchToProps)(TubeImage));

class Tube extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.props.item.transform.x += dx;
        this.props.item.transform.y += dy;
        this.forceUpdate();
    }

    render() {
        return (
            <ReactableChild
                draggable
                onDragMove={this.handleDragMove}
                item={this.props.item}
            />
        )
    }
}

export default Tube;

