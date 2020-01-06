'use strict'

const e = React.createElement

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {clickedTimes: 0}
    }

    handleClick() {
        this.setState({clickedTimes: this.state.clickedTimes + 1})
    }

    render() {
        if (this.state.clickedTimes === 10) {
            return 'You clicked this 10 times, no more clicking for you.'
        }

        return (
            <div className="wrapper">
                <button onClick={() => this.handleClick()}>
                    Clicked {this.state.clickedTimes} times
                </button>
                <p>
                    Clicked {this.state.clickedTimes} times
                </p>
            </div>
            /*e('div', {className: 'wrapper'},
                e('button', { onClick: () => this.setState({ clickedTimes: this.state.clickedTimes + 1  }) }, 'Clicked ' + this.state.clickedTimes + ' times'),
                e('p', {}, 'Clicked ' + this.state.clickedTimes + ' times')
        )*/
        )
    }
}

const domContainer = document.querySelector('#ReactStuff')
ReactDOM.render(e(MyComponent), domContainer)
