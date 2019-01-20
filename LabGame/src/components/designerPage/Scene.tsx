import * as React from 'react';
import Pipette from 'src/components/items/Pipette'
import * as ReactDOM from 'react-dom'


interface State {
    Items: any[]
}

class Scene extends React.Component<any, State>{
    constructor(props: any) {
        super(props);
        const pipette1 = new Pipette(null);
        const pipette2 = new Pipette(null);
        this.state = {
            Items: [pipette1, pipette2]
        }
    }

    render() {
        const items = this.state.Items.map((item) => {
            return (
               <Pipette></Pipette>  
            );
        })
        return (
            <div>
               {items}
            </div>
        )
    }
}

export default Scene;