import * as React from 'react';
import { Card, CardHeader, CardText } from 'reactstrap';

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
            <Card
                className="border-info mb-3 rounded-0"
            >
                <CardHeader>{this.props.text}</CardHeader>
            </Card>
        )
    }
}

export default Instruction;