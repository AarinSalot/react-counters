import React, { Component } from 'react';

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // for event handler

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }
    
   
    render() {

        console.log('Counters - Rendered');

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
               
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount() {
        const counts = this.props.counter.value
        return counts === 0 ? 'Zero' : counts; 
    }
}
 
export default Counter;
