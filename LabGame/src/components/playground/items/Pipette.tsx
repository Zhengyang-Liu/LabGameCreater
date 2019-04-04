import * as React from 'react';
import { connect } from 'react-redux';
import reactable from 'reactablejs';

import { selectElement, selectItem } from '../../../redux/ActionCreators';
import * as ItemProperty from '../../../shared/ItemDefinitePropertyDictionary';
import {LiquidList, LiquidColorDictionary} from '../../../shared/LiquidList';
import * as Types from '../../../types';

type ImageProps = {
    item: Types.Item,
    getRef: string
}
class PipetteImage extends React.Component<ImageProps>
{
    constructor(props: ImageProps) {
        super(props);
    }

    getImageSource = () => {
        let type = "";
        let volume = "";

        type = LiquidColorDictionary[this.props.item.property.liquidType];

        // switch (this.props.item.property.volume) {
        //     case 5:
        //         volume = '5';
        //         break;
        //     default:
        //         volume = '';
        //         break;
        // }

        return '/images/pipette' + type + '.svg';
    }

    render = () => {
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
                <img src={this.getImageSource()} height={ItemProperty.pipette.height} />
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
    selectElement: Function,
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
        this.props.selectElement(this);
        this.forceUpdate();
    }

    public update = () => {
        this.forceUpdate();
    }

    public takeLiquid = (liquidType: string, volume: number): boolean => {
        if ((this.props.item.property.liquidType == 'none' || this.props.item.property.liquidType == liquidType) && volume >= 5) {
            this.props.item.property.liquidType = liquidType;
            this.props.item.property.volume = 5;
            this.forceUpdate();
            return true;
        }
        return false;
    }

    public dropLiquid = (targetLiquidType: string): boolean => {
        if ((this.props.item.property.liquidType == targetLiquidType || targetLiquidType == 'none') && this.props.item.property.volume != 0) {
            this.props.item.property.volume = 0;
            this.forceUpdate();
            return true;
        }
        return false;
    }

    render() {
        return (
            <ReactablePipette
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
    selectItem: (item: Types.Item) => dispatch(selectItem(item)),
    selectElement: (element: any) => dispatch(selectElement(element))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pipette);

