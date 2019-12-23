import React, { Component } from 'react';

class Test extends Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        fetch('  http://localhost:3000/posts/1')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    title: data.title,
                    body: data.body
                })
            )
            .catch(err => console.log(err));
    }

    // componentWillMount() {
    //     console.log('willmount');
    // }

    // componentDidUpdate() {
    //     console.log('update');
    // }

    // componentWllUpdate() {
    //     console.log('Willupdate');
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('willrecieveprops');
    // }

    render() {
        const { title, body } = this.state;

        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default Test;
