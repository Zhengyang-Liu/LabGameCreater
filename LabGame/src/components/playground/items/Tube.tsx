import * as React from 'react';
import { connect } from 'react-redux';
import './interact.css'
import interact from 'interactjs';

import * as Types from '../../../types';
import DragableItem from './Item';

interface Props {
    item: Types.Item,
    selectedItem: Types.Item
}

class Tube extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.initInteract();
    }

    onDrop = (event) => {
        if (this.props.selectedItem.property.liquid == "none") {
            this.props.selectedItem.property.liquid = "water";
        }
        this.forceUpdate();
    }

    initInteract = () => {
        interact('.tubeDropZone').dropzone({
            accept: '.drag-drop',
            overlap: 0.1,
            ondrop: this.onDrop
        })
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
            <DragableItem item={this.props.item}>
                <img src={this.getImageSource()} height={100} />
            </DragableItem>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem
})

export default connect(mapStateToProps, null)(Tube);

