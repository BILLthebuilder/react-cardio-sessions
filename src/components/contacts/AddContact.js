import React, { Component } from 'react';
// import uuid from 'uuid';
import axios from 'axios';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    formSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        // Error Checking
        if (name === '') {
            this.setState({ errors: { name: 'Name must not be empty' } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email must not be empty' } });
            return;
        }

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone must not be empty' } });
            return;
        }

        const newContact = {
            name,
            email,
            phone
        };

        axios.post('https://a026a8bf.ngrok.io/users', newContact).then(res => {
            dispatch({ type: 'ADD_CONTACT', payload: newContact });
            console.log(res.data);
        });

        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter phone no."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-primary btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
