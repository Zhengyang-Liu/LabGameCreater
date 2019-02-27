import * as React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../../redux/ActionCreators';
import * as Types from '../../../types';
import DragableItem from './Item';


interface Props {
    item: Types.Item,
    selectedItem: Types.Item,
    selectItem: Function,
}

class Pipette extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
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
            <DragableItem item={this.props.item}>
                <img src={this.getImageSource()} height={300} />
            </DragableItem>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.selectedItem
})

const mapDispatchToProps = (dispatch) => ({
    selectItem: (item: Types.Item) => dispatch(selectItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pipette);

