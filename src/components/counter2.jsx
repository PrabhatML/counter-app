import React, { Component } from "react";

class Counter2 extends React.Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}> {tag} </li>
                ))}
            </ul>
        );
    }

    render() {
        return <React.Fragment>{this.renderTags()}</React.Fragment>;
    }
}

export default Counter2;
