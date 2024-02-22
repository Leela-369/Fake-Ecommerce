import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { login } from '../app/api/apiSlice';

const LoginForm = () => {
  const [loginformData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginformData);
      console.log('Login successful:', response);
      navigate('/home');
      console.log('navigated to home')
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        sx={{
          width: 300,
          padding: 2,
        }}
        elevation={3}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={loginformData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={loginformData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default LoginForm;
