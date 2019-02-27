import * as React from 'react';
import { connect } from 'react-redux';
import './interact.css'
import interact from 'interactjs';

import { selectItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';

interface Props {
    item: Types.Item,
    selectItem: Function,
    selectedItem: Types.Item,
}

class DragableItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.initInteract();
    }

    initInteract = () => {
        interact('.drag-drop')
            .draggable({
                // dragMoveListener from the dragging demo above
                onmove: this.dragMoveListener,
                onstart: this.dragstartListener
            });
    }

    dragstartListener = (event: any) => {
        alert(JSON.stringify(this.props.item));
        this.props.selectItem(this.props.item);
    }

    dragMoveListener = (event: any) => {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    render = () => {
        return (
            <div
                id="tube"
                className="drag-drop tubeDropZone"
                style={{
                    position: 'relative',
                    display: "inline-block",
                    left: this.props.item.transform.x,
                    top: this.props.item.transform.y,
                    background: 'transparent',
                    transform: `rotate(${this.props.item.transform.angle}deg)`,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem
})

export default connect(mapStateToProps, mapDispatchToProps)(DragableItem)