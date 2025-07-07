import React , {Component} from 'react';

class ReactLifeCycle extends Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0 // Initializing state
        };

        console.log("1) Constructor called");

        // this.incrementCount = this.incrementCount.bind(this);
        // Binding the incrementCount method to the component instance
    }

    componentDidMount(){
        console.log("2) ComponentDidMount called");
        // This method is called after the component is mounted
        // You can perform API calls or set up subscriptions here
    }

    componentDidUpdate(prevProps, prevState){
        console.log("3) ComponentDidUpdate called");
        // This method is called after the component updates
        // You can perform actions based on state or props changes here
    }
    componentWillUnmount(){
        console.log("4) ComponentWillUnmount called");
        // This method is called before the component is unmounted
        // You can clean up subscriptions or timers here
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {count : prevState.count + 1};
        }, () => {
            console.log("Count incremented to: ", this.state.count);
        });
    };
    render(){
        return (
            <div>
                <h1>React Life Cycle Methods</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>++</button>
            </div>
        );
    }
}

export default ReactLifeCycle;