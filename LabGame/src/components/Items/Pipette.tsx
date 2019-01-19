import * as React from 'react';
import reactable from 'reactablejs'

class Pipette extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div ref={this.props.getRef}>
                <img src="/images/pipette without fluid.svg" height={100} width={100} />
            </div>
        );
    }
}
const Reactable = reactable(Pipette) 
export default Pipette;

