import  { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css'; // Import the styles
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Signup component is mounted");
  }, []);

  const handleSignup = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address!');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Clear error message on successful validation
    setError('');
 
    //--- Commented/Edited by Sagar ----------------
    // // Save user info to localStorage (store email for simplicity)
    // localStorage.setItem('user', JSON.stringify({ email }));

    // // Optionally, you could also save password or other details securely,
    // // but for this example, we're just storing the email.

    // alert('Account created successfully!');
    async function signup() {
      try {
        // const response = await axios.post('http://localhost/signup', 
        // { 
        //    'username': email,
        //    'password': password
        // });
        const response = await axios.post('http://localhost:5000/signup',{ 
          'username': email,
          'password': password
       }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        alert(response.data.message); // Display success message
        navigate('/login');

    } catch (error) {
        console.log(error);
        
        console.error(error.response?.data || 'Error occurred');
        alert(error.response?.data.error || 'Signup failed');
    }
    }
    signup()
  };

  const handleInputChange = (e, field) => {
    // Clear error message as soon as the user starts typing
    if (error) setError('');
    if (field === 'email') {
      setEmail(e.target.value);
    } else if (field === 'password') {
      setPassword(e.target.value);
    } else if (field === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    }
  };

  return (
    <div className="signup-container">
      <Paper className="signup-form" elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Your Account
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Join us and explore amazing features!
        </Typography>
        {error && <Typography className="error-message">{error}</Typography>}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e, 'email')}
          variant="outlined"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e, 'password')}
          variant="outlined"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => handleInputChange(e, 'confirmPassword')}
          variant="outlined"
          fullWidth
          className="form-field"
        />
        <Button
          className="signup-btn"
          fullWidth
          onClick={handleSignup}
        >
          Signup
        </Button>
        <Button
          className="secondary-btn"
          fullWidth
          onClick={() => navigate('/login')}
        >
          Already have an account? Login
        </Button>
        <Button
          className="secondary-btn"
          fullWidth
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Paper>
    </div>
  );
};

export default Signup;
