import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Consumer } from '../../context';

// The Component for manipulating a single contact from the global state
class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`http://localhost:3000/users/${id}`);

        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{' '}
                                <i
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        this.setState({
                                            showContactInfo: !this.state.showContactInfo
                                        });
                                    }}
                                    className="fas fa-sort-down"
                                />
                                <i
                                    style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                    className="fas fa-times"
                                />
                                <Link to={`contact/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            color: 'black',
                                            cursor: 'pointer',
                                            float: 'right',
                                            marginRight: '1rem'
                                        }}
                                    ></i>
                                </Link>
                            </h4>
                            {showContactInfo ? (
                                <ul>
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
