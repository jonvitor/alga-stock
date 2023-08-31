import React from 'react'

class ClassComponent extends React.Component {

    state = {
        name : 'mundo'
    }

    render() {
        return <div>
            <p>{this.state.name}</p>
            <button onClick={() => {
                this.setState({name: 'João'})
            }}>Click me</button>
        </div>
    }

}

export default ClassComponent