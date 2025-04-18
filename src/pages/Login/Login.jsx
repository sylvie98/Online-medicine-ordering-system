import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper, Alert,MenuItem,Select,InputLabel,FormControl } from '@mui/material';

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Validation checks
    if (!userData.email || !userData.password) {
      setError("All fields are required!");
      return;
    }
    if (!emailPattern.test(userData.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!passwordPattern.test(userData.password)) {
      setError("Password must be at least 8 characters, contain one uppercase, one number, and one special character.");
      return;
    }
  

    // Simulating authentication from localStorage (no backend)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log("Stored users", storedUsers);
    const storedUser = storedUsers.find(
      (user) =>
        user.email === userData.email &&
        user.password === userData.password &&
        user.role === userData.role
    ); //end

    if (!storedUser) {
      setError("Invalid email, password, or role.");
      return;
    }

    alert("Login Successful!");
    if (storedUser.role === 'admin') {
      navigate('/Admin');
    } else if (storedUser.role === 'user') {
      navigate('/Catalog');
    } else {
      setError("Unknown user role! Please contact support.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "90px",marginBottom:'50%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            required
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
          />
           <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={userData.role}
              onChange={handleChange}
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ marginTop: "20px",backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' } }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
