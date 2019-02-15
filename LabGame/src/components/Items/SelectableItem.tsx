import * as React from 'react';

class SelectableItem extends React.Component {
    handleClick() {
        alert("Click");
    }

    render() {
        return (
            <div onClick={this.handleClick} />
        )
    }
}

export default SelectableItem;