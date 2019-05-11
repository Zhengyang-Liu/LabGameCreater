import * as React from 'react';
import { connect } from 'react-redux';

import { fetchScene } from '../../redux/ActionCreators';
import * as Types from '../../types';
import Menu from './Menu';
import PropertyPanel from './propertyPanel/PropertyPanel';
import Scene from './Scene';
import ToolBox from './ToolBox';

interface Props {
    fetchScene: Function,
    scene: Types.Scene,
    isLoading: boolean,
}

class Designer extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.fetchScene();
    }

    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <Menu></Menu>
                </div>
                <div className="row">
                    <div className="col-1 border" style={{ padding: "0px", height: "700px" }}>
                        <ToolBox />
                    </div>
                    <div className="col-7 border" style={{ padding: "0px" }}>
                        <Scene scene={this.props.scene}/>
                    </div>
                    <div className="col-4 border">
                        <PropertyPanel scene={this.props.scene} loadingScene={this.props.isLoading}/>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    scene: state.sceneInfo.scene,
    isLoading: state.sceneInfo.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    fetchScene: () => dispatch(fetchScene())
})

export default connect(mapStateToProps, mapDispatchToProps)(Designer);