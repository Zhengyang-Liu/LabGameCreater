import * as React from 'react';
import { connect } from 'react-redux';
import reactable from 'reactablejs';

import { selectItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';

type ImageProps = {
    selectItem: Function,
    item: Types.Item,
    getRef: string
}

class TubeImage extends React.Component<ImageProps>
{
    constructor(props: any) {
        super(props);
    }

    handleClick() {
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

const ReactableChild = reactable(TubeImage);

interface Props {
    item: Types.Item,
    selectedItem: Types.Item,
    selectItem: Function,
}

class Tube extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.props.item.transform.x += dx;
        this.props.item.transform.y += dy;
        this.forceUpdate();
        this.props.selectItem(this.props.item);
    }

    handleDrop = (e) => {
        alert(this.props.selectedItem);
    }

    render() {
        return (
            <ReactableChild
                draggable
                dropzone
                onDragMove={this.handleDragMove}
                onDrop={this.handleDrop}
                item={this.props.item}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tube);

