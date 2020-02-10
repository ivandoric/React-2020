import React from 'react';
import './App.css';

class Button extends React.Component {
    render() {
        return (
            <button style={{padding: '10px 20px', fontSize: '18px', borderRadius: '5px'}}  onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

class Lifecycles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        console.log('This will fire first')
    }

    componentDidMount() {
        console.log('This will fire third')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot);
        console.log('This will fire when component updates')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return 'Some data we calculated before we updated component'
    }

    componentWillUnmount() {
        console.log('I will fire when component unmounts')
    }

    countUp() {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return(
            <div>
                <h1>Lifecycles.</h1>
                <Button onClick={() => this.countUp()}>{this.state.counter}</Button>
            </div>
        )
    }
}

function App() {
    const [lifecycles, setLifecycles] = React.useState(true)

    const toggleLifecycles = () => {
        setLifecycles(!lifecycles)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={() => toggleLifecycles()}>Toggle Lifecycles</Button>
                <br />
                <br />
                <br />
                {lifecycles && <Lifecycles />}
            </header>
        </div>
    );
}

export default App;
