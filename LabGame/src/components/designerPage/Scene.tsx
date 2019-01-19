import * as React from 'react';
import Pipette from 'src/components/items/Pipette'
import * as ReactDOM from 'react-dom'
import reactable from 'reactablejs'

interface State {
    x: number,
    y: number,
    width: number,
    height: number,
    angle: number,
}

const ReactableChild = reactable(Pipette)


class Scene extends React.Component<State, State>{
    constructor(props: State) {
        super(props);
        this.state = {
            x: props.x,
            y: props.y,
            width: props.width,
            height: props.height,
            angle: props.angle
        };
    }

    doubled = false
    handleDragMove = (e) => {
        const { dx, dy } = e
        this.setState(state => ({
            x: this.state.x + dx,
            y: this.state.y + dy,
        }))
    }
    handleDoubleTap = (e) => {
        this.setState(prev => ({
            width: this.doubled ? prev.width / 2 : prev.width * 2,
            height: this.doubled ? prev.height / 2 : prev.height * 2,
        }))
        this.doubled = !this.doubled
    }
    handleGestureMove = (e) => {
        const { da } = e
        this.setState(state => ({
            angle: state.angle + da
        }))
    }
    handleResizeMove = (e) => {
        const { width, height } = e.rect
        const { left, top } = e.deltaRect


        this.setState(state => {
            return {
                x: state.x + left,
                y: state.y + top,
                width,
                height
            }
        })
    }

    render() {
        return (
            <div>
                <ReactableChild
                    draggable
                    gesturable
                    resizable={{
                        edges: { left: true, right: true, bottom: true, top: true }
                    }}
                    onDragMove={this.handleDragMove}
                    onDoubleTap={this.handleDoubleTap}
                    onGestureMove={this.handleGestureMove}
                    onResizeMove={this.handleResizeMove}
                    {...this.state}
                ></ReactableChild>
            </div>
        )
    }
}

export default Scene;