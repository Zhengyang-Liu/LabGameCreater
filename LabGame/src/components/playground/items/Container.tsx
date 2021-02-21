import * as React from 'react';
import { connect } from 'react-redux';
import reactable from 'reactablejs';

import { selectItem } from '../../../redux/ActionCreators';
import * as ItemProperty from '../../../shared/ItemDefinitePropertyDictionary';
import { LiquidColorDictionary } from '../../../shared/LiquidList';
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

    getImageSource = () => {
        let type = LiquidColorDictionary[this.props.item.property.liquidType];
        return '/images/container' + ' ' + type + '.svg';
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
                <img src={this.getImageSource()} height={ItemProperty.container.height} />
            </div>
        );
    }
}

const ReactableChild = reactable(ContainerImage);

interface Props {
    item: Types.Item,
    selectedItem: Types.Item,
    selectedElement: any,
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
        let param = {
            liquidType: this.props.item.property.liquidType,
            volume: this.props.item.property.volume,
        }
        this.props.selectedElement.interact(this.props.item.type, param);
        this.forceUpdate();
    }

    render() {
        return (
            <ReactableChild
                draggable
                dropzone={{
                    overlap: 0.01
                }}
                onDragMove={this.handleDragMove}
                onDrop={this.handleDrop}
                item={this.props.item}
            />
        )
    }
}
const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem,
    selectedElement: state.selectedElement,
})

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);

