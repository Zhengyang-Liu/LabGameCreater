import * as React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { checkPropTypes } from 'prop-types';

interface State {

}

interface Props {
    tools:[]
}

class ToolBox extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
    }

    render() {
        const tools = this.props.tools.map((tool: any) => {
            return (
                <Button type="button" className="btn btn-default">
                    <img width="100%" height="100%" src={tool.img}></img > {tool.name}
                </Button>
            );
        });

        return (
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                {tools}
            </div>
        )
    }
}

export default ToolBox;