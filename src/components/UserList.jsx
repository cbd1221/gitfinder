import React, { useState, useEffect } from 'react';
import UserListItem from './UserListItem';
import propTypes from 'prop-types';

const UserList = ({ username }) => {
    const [users, setUsers] = useState([]);
    const [searching, setSearching] = useState(false);

    const handleUserSearch = async () => {
        setSearching(true);
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${username}`);
            if (!response.ok) { 
                throw new Error('You Caught a Wild Error!'); 
            }
            var data = await response.json();
            setUsers(data);
            console.log(data);
          } catch (err) {
            console.log("Error fetching user data", err);
            setUsers([]);
          }
        }

          useEffect(() => {

            if (searching) {
                setSearching(false);
            }
          }, [searching]);

    return (
        <div>
            <button onClick={handleUserSearch}>Find Users</button>
            <div>
            {users.total_count === 0 ? <h2>No Users To Show, Try A Fresh Search</h2> : null}
                {users.items && users.items.length > 0 ? (
                    users.items.map((user) => <UserListItem key={user.id} login={user.login} avatar_url={user.avatar_url} />)
                ) : null}
            </div>
        </div>
    );
}

UserList.propTypes = {
    username: propTypes.string.isRequired,
};






export default UserList;