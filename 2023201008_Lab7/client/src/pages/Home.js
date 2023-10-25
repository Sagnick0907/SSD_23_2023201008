import React, { useState } from 'react';
import Navbaroutside from '../components/Navbaroutside';
import './Home.css';

const Home = () => {
    const [formData, setFormData] = useState({
        Username: '',
        password: '',
    });

    const { Username, password } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Login successful, you can handle the success scenario here
                // For example, redirect to another page
                const responseData = await response.json(); // Parse the JSON response
                const token = responseData.token; // Get the token from the response
                console.log('Login successful');
                console.log(token);
                localStorage.setItem('token', token); // Store the token in localStorage

                window.location.href = 'http://localhost:3000/AdminDashboard';
                
            } else {
                // Login failed, handle the error scenario here
                console.error('Login failed');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <div>
            <Navbaroutside />
            <div className="home-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="Username">Username:</label>
                            <input
                                type="Username"
                                id="Username"
                                name="Username"
                                placeholder="Enter your Username"
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
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>
                    <p className="create-account-link">
                        Don't have an account? <a href="/register">Create new account</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
