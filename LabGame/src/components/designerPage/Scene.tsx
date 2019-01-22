import * as React from 'react';
import * as ReactDOM from 'react-dom'
import Tool from '../items/Tool'
import Pipette from '../items/Pipette'

function RenderItem({ item }) {
    return (<div><Pipette/></div >);
}

interface State {
    Items: any[]
}

class Scene extends React.Component<any, State>{

    items: Array<Tool> = []

    constructor(props: any) {
        super(props);

        const pipette1 = new Pipette(null);
        const pipette2 = new Pipette(null);

        this.state = {
            Items: [pipette1, pipette2]
        }
    }

    save() {
        console.log(this.state.Items.map(item => item.saveDate()));
    }

    render() {
        this.save();
        return (
            <div>
                {/* {this.state.Items.map(item => <div>{item}</div>)} */}
            </div>
        )
    }
}

export default Scene;