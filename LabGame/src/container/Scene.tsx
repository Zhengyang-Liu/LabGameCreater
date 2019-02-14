import { connect } from 'react-redux';
import Scene from '../components/designer/Scene'
import { fetchItems } from '../redux/ActionCreators'

const mapStateToProps = state => ({
    scene: state.scene
})

const mapDispatchToProps = (dispatch) => ({
    fetchItems: () => { dispatch(fetchItems()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Scene);