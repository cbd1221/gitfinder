import { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data", err);
    }
  };

  // const handleUserSearch = async () => {
  //   try {
  //     const response = await fetch(`https://api.github.com/search/users?q=${username}`);
  //     if (!response.ok) { throw new Error('Network response failed'); }
  //     const data = await response.json();
  //     setUsers(data.items);
  //     console.log("users: ", users);
  //   } catch (err) {
  //     console.log("Error fetching user data", err);
  //     setUsers([]);
  //   }
  // };

  return (
    <div className="App">
      <h1>Github Profile Browser</h1>
      <h3>Search Github Usernames Below</h3>
      <div className='search-input'>
      <SearchBar
        className="searchBar"
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
        />
        </div>
        <div>
          <UserList  handleSearch={handleSearch} username={username} />
        </div>
    </div>
  );
}

export default App;

