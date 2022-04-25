import React from 'react';

const AddUser = () => {

    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log(user);

        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => console.log('success', data));
    }

    return (
        <div>
            <h2>Add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;