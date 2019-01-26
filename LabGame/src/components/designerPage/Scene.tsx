import * as React from 'react';
import * as ReactDOM from 'react-dom'
import Tool from '../items/Tool'
import { connect } from 'react-redux';
import { COMPONENTS } from '../../shared/ComponentDictionary'
import { addItem } from '../../redux/ActionCreators'

function RenderItem({ item }) {
    var item: any = React.createElement(COMPONENTS[item.type])
    return (item);
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (type) => dispatch(addItem(type))
})

interface State {
    items: any[]
}

interface Props {
    scene: any[]
}

class Scene extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);

        // const pipette1 = new Pipette(null);
        // const pipette2 = new Pipette(null);

        this.state = {
            items: this.props.scene
        }
    }

    save() {
        console.log(this.state.items);
    }

    render() {

        const items = this.state.items.map((item) => {
            return (
                <RenderItem item={item}></RenderItem>

            );
        });

        this.save();
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default connect<any, any, any>(mapDispatchToProps)(Scene);