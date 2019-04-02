import * as React from 'react';
import { Control } from 'react-redux-form';
import { Button, Col, Container, Label, Row } from 'reactstrap';
import FormGroup from 'reactstrap/lib/FormGroup';
import { LiquidList } from '../../../../shared/LiquidList';
import * as Types from '../../../../types';

interface Props {
    liquidList: Types.LiquidList,
}

class LiquidPanelComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    handleLiquidTypeChange = (index: number, event) => {
        this.props.liquidList[index].type = event.target.value;
    }

    handleVolumeChange = (index: number, event) => {
        this.props.liquidList[index].volume = parseInt(event.target.value);
    }

    handleAddLiquid = (event) => {
        this.props.liquidList.push({
            type: "",
            volume: 0
        })
        this.forceUpdate();
    }

    singleLiquid = (index: number) => {
        const LiquidTypes = LiquidList.map(item => {
            return (
                <option key={item}>{item}</option>
            );
        })
        return (
            <Container key={index}>
                <FormGroup>
                    <Row className="form-group">
                        <Label md={4}>Type:</Label>
                        <Col md={8}>
                            <Control.select
                                model={"selectedItem.property.liquid[" + index + "].type"}
                                className="form-control"
                                placeholder="Name"
                                onChange={(e) => this.handleLiquidTypeChange(index, e)}
                            >
                                {LiquidTypes}
                            </Control.select>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Label md={4}>Volume:</Label>
                        <Col md={8}>
                            <Control.text
                                model={"selectedItem.property.liquid[" + index + "].volume"}
                                className="form-control"
                                placeholder="volume"
                                onChange={(e) => this.handleVolumeChange(index, e)}
                            ></Control.text>
                        </Col>
                    </Row>
                </FormGroup>
            </Container>
        )
    }

    render = () => {
        const liquidList = this.props.liquidList.map((liquid, index) => {
            return (this.singleLiquid(index))
        })
        return (
            <>
                <FormGroup>
                    <strong>
                        Lequid
                </strong>
                    <Button className="fa fa-plus float-sm-right" size="sm"
                        onClick={(e) => this.handleAddLiquid(e)}
                    />
                </FormGroup>
                {liquidList}
            </>
        )
    }
}

export default LiquidPanelComponent;
