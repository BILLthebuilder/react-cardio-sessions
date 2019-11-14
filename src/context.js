/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};
export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'johndoe@email.com',
                phone: '44443334422'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'karen@email.com',
                phone: '334556334422'
            },
            {
                id: 3,
                name: 'John Smith',
                email: 'johnsmith@email.com',
                phone: '87960958599'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
    }
}

export const { Consumer } = Context;
