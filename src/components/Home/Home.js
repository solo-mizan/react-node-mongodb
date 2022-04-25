import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(d => setUsers(d))
    }, []);

    const handleUserDelete = (id) => {
        const url = `http://localhost:5000/user/:${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log('deleting', id);
    }

    return (
        <div>
            <h1>Homepage</h1>
            <br />
            <h2>Available users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;