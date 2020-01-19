import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    render() {
        return (
            <button style={this.props.buttonStyle} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

class ColorChanger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blockColor: '#fff',
            styling: {
                padding: '10px 20px',
                fontSize: 18,
                borderRadius: 5,
            }
        }
    }

    handleColorChange(color) {
        this.setState({blockColor: color})
    }

    render() {
        return (
            <div>
                <div className="ColorBlock" style={{width: 100, height: 100, background: this.state.blockColor}}></div>

                <Button onClick={() => this.handleColorChange('red')}
                        buttonStyle={this.state.styling}>
                    Red
                </Button>
                <Button onClick={() => this.handleColorChange('blue')}
                        buttonStyle={this.state.styling}>
                    Blue
                </Button>
                <Button onClick={() => this.handleColorChange('green')}
                        buttonStyle={this.state.styling}>
                    Green
                </Button>
            </div>
        )
    }
}


function App() {

    const style = {
        padding: '10px 20px',
        fontSize: 18,
        borderRadius: 5,
    }

    return (
        <div className="App">
            <header className="App-header">
                <ColorChanger />
            </header>
        </div>
    );
}

export default App;
