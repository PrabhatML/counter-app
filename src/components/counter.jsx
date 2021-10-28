import React, { Component } from "react";

class Counter extends React.Component {
    render() {
        const { onReset, counter, onDelete, onIncrement } = this.props;
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt='' /> */}
                <span
                    style={{ fontSize: 30 }}
                    className={this.getBadgeClasses(counter)}
                >
                    {this.formatvalue()}
                </span>
                <button
                    onClick={() => onIncrement(counter)}
                    className='btn btn-primary btn-sm'
                >
                    Increment
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className='btn btn-danger btn-sm'
                >
                    Delete
                </button>
                <br></br>
                {/* <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}> {tag} </li>
                    ))}
                </ul> */}
            </React.Fragment>
        );
    }

    getBadgeClasses(counter) {
        let classes = "badge m-2 badge-";
        classes += counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatvalue() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
