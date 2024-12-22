import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Importing the CSS
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:5000/login',{ 
          'username': email,
          'password': password
       }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        alert(response.data.message); 
        dispatch(login({ email }));
        navigate('/home-page'); // Redirect to dashboard
      } catch(error) {
        alert(error);
      }
  };

  return (
    <div className="login-container">
      <Paper className="login-form" elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Login to continue.
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          className="form-field"
        />
        <Button
          variant="contained"
          className="login-btn"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="text"
          className="secondary-btn"
          fullWidth
          onClick={() => navigate('/signup')}
        >
          Don’t have an account? Signup
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
