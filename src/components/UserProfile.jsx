// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

export default function UserProfile({ userData }) {
    const { login, name, avatar_url, bio, public_repos, followers, following }  = userData;
    
    function handleWindow() {
        var login = userData.login;
        window.open(`https://github.com/${login}`);
    }

    return (
        <div>
            <img src={avatar_url} alt={`${login}'s avatar`} onClick={handleWindow} />
            <h2>{name || login }</h2>
            <h4>{`username: ${login}`}</h4>
            <p>{bio}</p>
            <p>Repos: { public_repos }</p>
            <p>Followers: { followers }</p>
            <p>Following: { following }</p>
        </div>
    );
}

UserProfile.propTypes = {
    userData: PropTypes.shape({
        login: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        bio: PropTypes.string,
        public_repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
    }).isRequired,
};

