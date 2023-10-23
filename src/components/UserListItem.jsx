import React from 'react';
import propTypes from 'prop-types';

const UserListItem = ({ login, avatar_url}) => {
    return (
        <div>
            <div>
                <h3>{login}</h3>
                <div>
                    <img src={avatar_url} alt="user avatar"/>
                </div>
            </div>
        </div>
    );
}

UserListItem.propTypes = {
    login: propTypes.string,
    avatar_url: propTypes.string,
}


export default UserListItem;