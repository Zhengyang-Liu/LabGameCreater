import * as React from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux';
import { baseUrl } from '../../shared/baseUrl'
import { newScene } from '../../redux/ActionCreators'

interface Props {
    scene: any,
    newScene: Function
}

class Menu extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    saveScene = () => {
        console.log(JSON.stringify(this.props.scene));

        fetch(baseUrl + 'scene', {
            method: "PUT",
            body: JSON.stringify(this.props.scene),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
    }

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <Button type="button" className="btn btn-default" onClick={() => this.props.newScene()}>
                    New Scene
        </Button>
                <Button type="button" className="btn btn-default" onClick={() => this.saveScene()}>
                    Save Scene
        </Button>
                <Button type="button" className="btn btn-default">
                    Load Scene
        </Button>
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    scene: state.scene
})

const mapDispatchToProps = (dispatch) => ({
    newScene: () => dispatch(newScene())
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);