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

    getImageSource = () => {
        switch (this.props.item.property.liquid) {
            case 'water':
                return "/images/open centrifuge tube with fluid.svg";
            default:
                return "/images/open centrifuge tube without fluid.svg";
        }
    }
    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    left: this.props.item.transform.x,
                    top: this.props.item.transform.y,
                    display: "inline-block",
                    background: 'transparent',
                    transform: `rotate(${this.props.item.transform.angle}deg)`,
                }}
                ref={this.props.getRef}>
                <img src={this.getImageSource()} height={100} />
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
        if (this.props.selectedItem.property.liquidType != "none" && this.props.item.property.liquidType == "none") {
            this.props.item.property.liquidType = this.props.selectedItem.property.liquidType;
        }
        this.forceUpdate();
    }

    render() {
        return (
            <ReactableChild
                draggable
                dropzone={{
                    overlap: 0.01,
                }}
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

