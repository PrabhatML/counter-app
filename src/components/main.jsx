import React, { Component } from "react";
import Counters from "./counters";
import Navbar from "./navbar";

class Main extends React.Component {
    state = {
        counter_list: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    handleReset = () => {
        const counters = this.state.counter_list.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counter_list: counters });
    };

    handleDelete = (counterId) => {
        const counters = this.state.counter_list.filter(
            (c) => c.id !== counterId
        );
        this.setState({ counter_list: counters });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counter_list];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counter_list: counters });
    };

    render() {
        return (
            <div className='App'>
                <Navbar
                    totalCounters={
                        this.state.counter_list.filter((c) => c.value > 0)
                            .length
                    }
                />
                <main className='container'></main>
                <Counters
                    counter_list={this.state.counter_list}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default Main;
