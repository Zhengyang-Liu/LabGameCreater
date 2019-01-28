import * as React from 'react'
import { Button } from 'reactstrap'

const ToolBox = ({ tools, addItem }) => (
    <div className="btn-group-vertical" role="group" aria-label="Basic example">
        {tools.map((tool: any) =>
            <Button type="button" className="btn btn-default" onClick={() => addItem(tool.name)}>
                <img width="100%" height="100%" src={tool.img}></img > {tool.name}
            </Button>
        )
        }
    </div>
)

export default ToolBox