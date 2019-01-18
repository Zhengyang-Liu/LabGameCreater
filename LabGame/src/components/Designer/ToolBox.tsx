import * as React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';

interface State {

}

interface Props {

}

class ToolBox extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <Button type="button" className="btn btn-secondary">Left</Button>
                <Button type="button" className="btn btn-secondary">Middle</Button>
                <Button type="button" className="btn btn-secondary">Right</Button>
            </div>
        )
    }
}

export default ToolBox;