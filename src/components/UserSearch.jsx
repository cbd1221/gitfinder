import React, { useState } from 'react';

const UserSearch = () => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = () => {
        console.log("searching for users...");
        fetch(`https://api.github.com/users/${query}`)
        .then((response) => {
            if (response.ok) {
            console.log("response: ", response);
            return response.json();
            }
            else {
                console.log("user not found");
            }
        })
    }

    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value) }
                placeholder='Search For Github Users'
                />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <a href={user.html_url} target='_blank' rel="noreferrer">
                        {user.login}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserSearch;