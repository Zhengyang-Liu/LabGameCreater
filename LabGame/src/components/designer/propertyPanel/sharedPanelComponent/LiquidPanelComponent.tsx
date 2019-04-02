import * as React from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';
import { Button, Col, Container, Label, Row } from 'reactstrap';
import { addLiquid } from '../../../../redux/ActionCreators';
import { LiquidList } from '../../../../shared/LiquidList';
import * as Types from '../../../../types';
import FormGroup from 'reactstrap/lib/FormGroup';

interface Props {
    liquidList: Types.LiquidList,
    addLiquid: Function,
    itemId: Number,
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
                        onClick={() => {
                            this.props.addLiquid(this.props.itemId);
                            this.forceUpdate();
                        }}
                    />
                </FormGroup>
                {liquidList}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addLiquid: (selectedItemId: number) => dispatch(addLiquid(selectedItemId)),
})

const mapStateToProps = (state) => ({
    itemId: state.selectedItem.id
})

export default connect(mapStateToProps, mapDispatchToProps)(LiquidPanelComponent);
