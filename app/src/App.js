import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function Button({children, buttonStyle}) {
    return <button style={buttonStyle}>{children}</button>
}*/

class Button extends React.Component {
    render() {
        return (
            <button style={this.props.buttonStyle}>
                {this.props.children}
            </button>
        )
    }
}

function Newsletter(props) {
    return (
        <div>
            <input type="text" placeholder={props.placeholder}/>
            <Button buttonStyle={props.buttonStyle}>
                {props.buttonChildren}
            </Button>
        </div>
    )
}

function App() {

    const style = {
        padding: '10px 20px',
        fontSize: 18,
        borderRadius: 5,
    }

    const style2 = {
        padding: '10px 20px',
        fontSize: 45,
        borderRadius: 5,
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button buttonStyle={style}>Click me</Button>
                <Button buttonStyle={style2}>🎉</Button>
                <Button buttonStyle={style2}>💩</Button>
                <hr />

                <Newsletter placeholder="Enter your email" buttonStyle={style} buttonChildren="Submit" />
            </header>
        </div>
    );
}

export default App;
