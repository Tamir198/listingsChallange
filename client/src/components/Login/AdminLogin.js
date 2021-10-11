import { useState } from 'react';
import './AdminLogin.css'
import checkAdminCredentials from './CheckAdminCredentials';
import showAdminUI from './showAdminUI';

const AdminLogin = (props) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleLoginButtonClick = async () => {
    const credentials = await checkAdminCredentials(name, password);

    if (credentials) {
      document.querySelector('.login-container').classList.add('hide');
      showAdminUI();
     
    } else {
      alert("Wrong credentials");
    }
  }

  return (
    <div className="login-container">
      <input className="name-input"
        onInput={(e) => setName(e.target.value)}
        placeholder="Name">
      </input>

      <input className="password-input"
        onInput={(e) => setPassword(e.target.value)}
        placeholder="Password">
      </input>

      <button onClick={() => handleLoginButtonClick()} className="log-in-button">Log in</button>
    </div>
  )
}

export default AdminLogin;