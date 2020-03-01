import React, {useEffect} from 'react';
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

const namesArray = ['jack', 'jill', 'tom', 'harvey']

function HelloWorld() {
    React.useEffect(() => {
        console.log('Hello World')

        return function cleanup() {
            console.log('Goodbye world')
        }
    }, [])

    return <div>Hello World</div>
}

function Effects() {
    const [names, setNames] = React.useState([])
    const [counter, setCounter] = React.useState(0)
    const [helloWorld, toggleHelloWorld] = React.useState(true)

    React.useEffect(() => {
        setNames(namesArray)
        setCounter(counter + 1)
    }, [])

    React.useEffect(() => {
        setNames(names => [...names, counter])
    }, [counter])

    return (
        <div>
            {helloWorld && <HelloWorld />}
            <Button onClick={() => setCounter(counter + 1)}>{counter}</Button>
            <Button onClick={() => toggleHelloWorld(!helloWorld)}>Toggle Hello</Button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Effects />
            </header>
        </div>
    );
}

export default App;
