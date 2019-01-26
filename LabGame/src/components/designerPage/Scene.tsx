import * as React from 'react';
import * as ReactDOM from 'react-dom'
import Tool from '../items/Tool'
import Pipette from '../items/Pipette'

function RenderItem({ item }) {
    return (<div><Pipette /></div >);
}

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

export default Scene;