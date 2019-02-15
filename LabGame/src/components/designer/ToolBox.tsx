import * as React from 'react'
import { Button } from 'reactstrap'

const ToolBox = ({ tools, addItem }) => (
    <div className="btn-group-vertical" role="group" aria-label="Basic example">
        {tools.map((tool: any) =>
            <Button type="button" className="btn btn-default" onClick={() => addItem(tool.name)}>
                <img className="row" width="150" height="150" src={tool.img}></img > {tool.name}
            </Button>
        )
        }
    </div>
)

export default ToolBox