import * as React from 'react';
import { connect } from 'react-redux';
import reactable from 'reactablejs';

import { selectItem } from '../../../redux/ActionCreators';
import * as ItemProperty from '../../../shared/ItemDefinitePropertyDictionary';
import * as Types from '../../../types';

type State = {}
type Props = {
    selectItem: Function,
    item: Types.Item
    getRef: string
}
class PipetteImage extends React.Component<Props, State>
{
    constructor(props: Props) {
        super(props);
    }

    handleClick = () => {
        this.props.selectItem(this.props.item);
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
                <img src="/images/pipette without fluid.svg" height={ItemProperty.pipette.height} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

const ReactablePipette = reactable(connect(null, mapDispatchToProps)(PipetteImage));

class Pipette extends React.Component<any, any> {
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
            <ReactablePipette
                draggable
                onDragMove={this.handleDragMove}
                item={this.props.item}
            />
        )
    }
}

export default Pipette;

