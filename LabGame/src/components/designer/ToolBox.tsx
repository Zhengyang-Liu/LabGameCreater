import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { addItem } from '../../redux/ActionCreators';

const ToolBox = ({ tools, addItem }) => (
    <div className="btn-group-vertical">
        {tools.map((tool: any) =>
            <Button type="button" className="btn btn-default" onClick={() => addItem(tool.name)} key={tool.name}>
                <img className="row" width="99" height="100" src={tool.img}></img > {tool.name}
            </Button>
        )
        }
    </div>
)


const mapDispatchToProps = dispatch => ({
    addItem: (name: string) => dispatch(addItem(name))
})

const mapStateToProps = state => ({
    tools: state.tools
})


export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ToolBox);