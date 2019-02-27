import * as React from 'react';

type Props = {
    text: string
}

class Instruction extends React.Component<Props>
{
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        return (
            <h3>{this.props.text}</h3>
        )
    }
}

export default Instruction;