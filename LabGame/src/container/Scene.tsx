import { connect } from 'react-redux';
import Scene from '../components/designer/Scene'
import { fetchScene } from '../redux/ActionCreators'

const mapStateToProps = state => ({
    scene: state.scene
})

const mapDispatchToProps = (dispatch) => ({
    fetchItems: () => { dispatch(fetchScene()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Scene);