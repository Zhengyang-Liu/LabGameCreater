import * as React from 'react';
import { connect } from 'react-redux';
import reactable from 'reactablejs';

import { selectItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';
import { store } from '../../../App';

type ImageProps = {
    item: Types.Item,
    getRef: string
}
class PipetteImage extends React.Component<ImageProps>
{
    constructor(props: ImageProps) {
        super(props);
    }

    handleClick = () => {
    }

    getImageSource = () => {
        switch (this.props.item.property.liquid) {
            case 'water':
                return "/images/pipette with fluid.svg";
            default:
                return "/images/pipette without fluid.svg";
        }
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
                <img src={this.getImageSource()} height={300} />
            </div>
        );
    }
}

const ReactablePipette = reactable(PipetteImage);

interface Props {
    item: Types.Item,
    property: Types.Property,
    selectedItem: Types.Item,
    selectItem: Function,
}

class Pipette extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleDragMove = (e) => {
        const { dx, dy } = e;
        this.props.item.transform.x += dx;
        this.props.item.transform.y += dy;
        this.props.selectItem(this.props.item);
        this.forceUpdate();
    }

    componentDidMount() {
        store.subscribe(this.handleChange.bind(this))
    }

    handleChange() {
        this.forceUpdate()
    }

    render() {
        return (
            <ReactablePipette
                id="yes-drop"
                draggable
                onDragMove={this.handleDragMove}
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

export default connect(mapStateToProps, mapDispatchToProps)(Pipette);

