import * as React from 'react';
import Pipette from 'src/components/items/Pipette'
import * as ReactDOM from 'react-dom'
import Tool from '../items/Tool'


interface State {
    Items: any[]
}

class Scene extends React.Component<any, State>{

    items: Array<Tool> = []

    constructor(props: any) {
        super(props);
        
        const pipette1 = <Pipette />
        const pipette2 = <Pipette />
        //this.items.push(pipette1);
        
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
               {this.state.Items.map(item => <div>{item}</div>)}
            </div>
        )
    }
}

export default Scene;