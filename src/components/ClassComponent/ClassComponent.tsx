import React from 'react';

class ClassComponent extends React.Component {
    constructor(props: any) {
        super(props);
        console.log('constructor reached!');
    }

    state = {
        name: 'mundo'
    }

    componentDidMount(): void {
        console.log('componentDidMountReached!');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate reached!');
    }

    render() {
        console.log('render reached!');
        return <div>
            <p>{this.state.name}</p>
            <button onClick={() => {
                this.setState({ name: 'João' })
            }}>Click me</button>
        </div>;
    }

}

export default ClassComponent;