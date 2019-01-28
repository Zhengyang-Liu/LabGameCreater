import { connect } from 'react-redux';
import Scene from '../components/Scene'

const mapStateToProps = state => ({
    items: state.items
})


export default connect(mapStateToProps)(Scene);