import React, { Component } from 'react';
import uuid from 'uuid';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb2">
                                <span className="text-primary">Contact </span>
                                List
                            </h1>
                            {contacts.map(contact => (
                                <Contact key={uuid()} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
