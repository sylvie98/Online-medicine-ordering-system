import React, { useState } from "react";
import { Container, TextField, Button,Typography,MenuItem,Select,InputLabel,FormControl,Paper,Alert} from "@mui/material";
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
  });

  const [error, setError] = useState("");

  // Validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phonePattern = /^0\d{9}$/; // Must start with 0 and be exactly 10 digits

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    // Validation checks
    if (!userData.name || !userData.email || !userData.password || !userData.confirmPassword || !userData.phone || !userData.role) {
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
    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!phonePattern.test(userData.phone)) {
      setError("Phone number must be exactly 10 digits and start with 0.");
      return;
    }

    alert("Registration Successful!");
    let users = JSON.parse(localStorage.getItem('users')); // Retrieve existing users
    if (!Array.isArray(users)) {
      users = []; // Ensure users is an array
    }
    users.push(userData); // Add the new user
    localStorage.setItem('users', JSON.stringify(users)); // Save updated users array
    console.log("Retrieved users", users);
    // Clear form
    setUserData({ name: "", email: "", password: "", confirmPassword: "", phone: "", role: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Typography variant="h4" className="hh" align="center" gutterBottom>
          Register
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            required
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            required
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            error={userData.phone && !phonePattern.test(userData.phone)}
            helperText={userData.phone && !phonePattern.test(userData.phone) ? "Phone number must be 10 digits and start with 0" : ""}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            name="password"
            value={userData.password}
            onChange={handleChange}
            error={userData.password && !passwordPattern.test(userData.password)}
            helperText={userData.password && !passwordPattern.test(userData.password) ? "Min. 8 chars, 1 uppercase, 1 number, 1 special character" : ""}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            name="confirmPassword"
            value={userData.confirmPassword}
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
            sx={{ marginTop: "20px" ,backgroundColor: '#063970', '&:hover': { backgroundColor: '#05599d' }}} 
          >
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
