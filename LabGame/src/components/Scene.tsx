import * as React from 'react';
import { COMPONENTS } from '../shared/ComponentDictionary'

function RenderItem({ item }) {
    var item: any = React.createElement(COMPONENTS[item.type], item.transform)
    return (item);
}

const Scene = ({ items }) => (
    <div>
        {items.map((item) =>
            <RenderItem item={item}></RenderItem>
        )}
    </div>
)

export default (Scene);