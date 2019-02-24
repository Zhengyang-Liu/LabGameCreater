import * as React from 'react';
import { connect } from 'react-redux';
import './interact.css'
import interact from 'interactjs';

import { selectItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';

interface Props {
    item: Types.Item,
    selectedItem: Types.Item,
    selectItem: Function,
}
interact('.drag-drop')
    .draggable({
        // dragMoveListener from the dragging demo above
        onmove: dragMoveListener,
    });

function dragMoveListener(event: any) {
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
            <div
                id="tube"
                className="drag-drop"
                style={{
                    position: 'relative',
                    left: this.props.item.transform.x,
                    top: this.props.item.transform.y,
                    display: "inline-block",
                    background: 'transparent',
                    transform: `rotate(${this.props.item.transform.angle}deg)`,
                }}
            >
                <img src="/images/open centrifuge tube without fluid.svg" height={100} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tube);

