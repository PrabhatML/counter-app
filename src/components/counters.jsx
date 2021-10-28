import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
    render() {
        const { onReset, counter_list, onDelete, onIncrement } = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'
                >
                    Reset
                </button>
                <br></br>
                {counter_list.map((counter) => (
                    <Counter
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        key={counter.id}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
