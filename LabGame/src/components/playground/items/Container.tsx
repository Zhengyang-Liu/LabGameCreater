import * as React from 'react';
import { connect } from 'react-redux';
import reactable from 'reactablejs';

import { selectItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';

type ImageProps = {
    item: Types.Item
    getRef: string
}

class ContainerImage extends React.Component<ImageProps>
{
    constructor(props: ImageProps) {
        super(props);
    }

    handleClick = () => {
    }

    render = () => {
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
                <img src="/images/container with fluid.svg" height={100} />
            </div>
        );
    }
}

const ReactableChild = reactable(ContainerImage);

interface Props {
    item: Types.Item,
    selectedItem: Types.Item,
    selectItem: Function,
}

class Container extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            x: this.props.item.transform.x,
            y: this.props.item.transform.y
        }
    }

    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.props.item.transform.x += dx;
        this.props.item.transform.y += dy;
        this.forceUpdate();
        this.props.selectItem(this.props.item);
    }

    handleDrop = (e) => {
        let keys = Object.keys(e.relatedTarget)
        let reactEventHandlerKey = '';
        for (let element of keys) {
            if (element.includes("__reactEventHandlers")) {
                reactEventHandlerKey = element;
                break;
            }
        }

        switch (this.props.selectedItem.type) {
            case 'pipette':
                if (this.props.item.property.liquid != 'none') {
                    this.props.selectedItem.property.liquid = this.props.item.property.liquid;
                }
        }

        let dropObject = e.relatedTarget[reactEventHandlerKey].children._owner;
        dropObject.setState();
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

export default connect(mapStateToProps, mapDispatchToProps)(Container);
