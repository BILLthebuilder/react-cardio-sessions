import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from '../../context';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = (id, dispatch) => {
        axios
            .delete(`http://localhost:3000/users/${id}`)
            .then(_res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
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
                                ></i>
                                <i
                                    style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                    className="fas fa-times"
                                ></i>
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
