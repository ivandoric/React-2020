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


const AppContext = React.createContext(null)

function ContextWrapper(props) {
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    }

    const [isVisible, toggleVisible] = React.useState(true)

    return (
        <AppContext.Provider value={{user, isVisible, toggleVisible}}>
            {props.children}
        </AppContext.Provider>
    )
}

function User(props) {
    const { user, isVisible, toggleVisible } = React.useContext(AppContext)

    return (
        <div>
            {isVisible && <div style={{height: 100, width: 100, background: '#ffffff'}}></div>}
            <br />
            <Button onClick={() => toggleVisible(!isVisible)}>Toggle square</Button>
            <br />
            My name is {user.firstName} {user.lastName}
        </div>
    )
}

function Card(props) {
    return <User />
}

function CardWrapper(props) {
    return <Card />
}



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ContextWrapper>
                    <CardWrapper />
                </ContextWrapper>
            </header>
        </div>
    );
}

export default App;
