import * as React from 'react';
import reactable from 'reactablejs'

class Pipette extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div style={{
                fontSize: '30px',
                position: 'relative',
                left: this.props.x,
                top: this.props.y,
                width: this.props.width,
                height: this.props.height,
                background: 'grey',
                transform: `rotate(${this.props.angle}deg)`,
            }}
                ref={this.props.getRef}>
                <img src="/images/pipette without fluid.svg" height={100} width={100} />
            </div>
        );
    }
}
const Reactable = reactable(Pipette)
export default Pipette;

