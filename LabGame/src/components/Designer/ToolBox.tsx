import * as React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { checkPropTypes } from 'prop-types';

interface State {

}

interface Props {

}

class ToolBox extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    makeToolButtons(params: any) {
        const tools = params.tools.map((tool: any) => {
            return (
                <Button type="button" className="btn btn-secondary">
                    <img src={tool.imagePath}></img >
                </Button>
            );
        })
    };

    render() {
        return (
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                {this.makeToolButtons}
            </div>
        )
    }
}

export default ToolBox;