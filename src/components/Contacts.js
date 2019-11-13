import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
            ]
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </div>
        );
    }
}

export default Contacts;
