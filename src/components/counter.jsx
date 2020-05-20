import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        
        const counter = this.props.counter;

        return (
            <div>
                <span className="m-4">{counter.name}</span>
                <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" 
                    onClick={() => this.props.onAdd(counter)}
                >
                    Add
                </button>
                <button className="btn btn-danger btn-sm m-2"
                    onClick= {() => this.props.onRemove(counter)}
                >
                    Remove
                </button>
            </div>
        );
    }

    getBadgeClasses() {

        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {

        const { value } = this.props.counter;
        return value === 0 ? 'Zero' :  value;
    }
}
 
export default Counter;