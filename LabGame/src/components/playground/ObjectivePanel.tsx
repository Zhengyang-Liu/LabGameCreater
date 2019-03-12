import * as React from 'react';
import { connect } from 'react-redux';
import {
    Card, CardBody, CardHeader, Col, Collapse, FormGroup, Label, Row, UncontrolledCollapse
} from 'reactstrap';

import * as Types from '../../types';

interface Props {
    scene: Types.Scene,
    currentStepNumber: number,
}

interface State {
    currentStepNumber: number,
}

class ObjectivePanel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    singleStep = (stepNumber: number) => {
        return (
            <div>
                <Card outline color='info'>
                    <CardHeader tag="p" style={{ padding: "5px" }}>
                        {this.props.scene.objective[stepNumber].title}
                    </CardHeader>
                    <Collapse isOpen={stepNumber == this.props.currentStepNumber}>
                        <CardBody style={{ padding: "5px" }}>
                            <p>{this.props.scene.objective[stepNumber].description}</p>
                        </CardBody>
                    </Collapse >
                </Card>
            </div>
        )
    }

    render = () => {
        const steps = this.props.scene.objective.map((step, index) => {
            return (this.singleStep(index))
        })

        return (
            <div>
                {steps}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    scene: state.sceneInfo.scene,
})


export default connect(mapStateToProps, null)(ObjectivePanel);
