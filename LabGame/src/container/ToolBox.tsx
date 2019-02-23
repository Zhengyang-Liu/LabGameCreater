import { connect } from 'react-redux';

import ToolBox from '../components/designer/ToolBox';
import { addItem } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    addItem: (name: string) => dispatch(addItem(name))
})

const mapStateToProps = state => ({
    tools: state.tools
})


export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ToolBox);