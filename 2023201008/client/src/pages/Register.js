import React, { useState } from 'react';
import Navbaroutside from '../components/Navbaroutside';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        Username: '',
        password: '',
        password2: '', // New state variable for Confirm Password
    });

    const { Username, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            console.error("Password and Confirm Password do not match");
            return; // Prevent form submission if passwords do not match
        }

        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Registration successful, you can handle the success scenario here
                // For example, redirect to a login page
                console.log('Registration successful');
                // Redirect to the login page after successful registration
                window.location.href = 'http://localhost:3000/';
            } else {
                // Registration failed, handle the error scenario here
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <div>
            <Navbaroutside />
            <div className="register-container">
                <div className="register-box">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="Username">Name:</label>
                            <input
                                type="text"
                                id="Username"
                                name="Username"
                                placeholder="Enter your name"
                                required
                                value={Username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password2">Confirm Password:</label>
                            <input
                                type="password"
                                id="password2"
                                name="password2"
                                placeholder="Confirm your password"
                                required
                                value={password2}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="register-btn">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
