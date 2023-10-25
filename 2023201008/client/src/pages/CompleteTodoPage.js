import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './CompleteTodoPage.css';

const CompleteTodoPage = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [completeTodos, setCompleteTodos] = useState([]);

    // Define a function to fetch complete to-do items
    const fetchCompleteTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/allCompleteQuestions', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Add the token to the headers
                },
            });

            if (response.ok) {
                // Data fetched successfully
                const responseData = await response.json();
                setCompleteTodos(responseData);
            } else {
                console.error('Failed to fetch data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    // Check if token exists, if not, redirect to /
    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            fetchCompleteTodos(); // Fetch data when the component mounts
        }
    }, [token, navigate]);

    return (
        <div>
            <Navbar />
            <hr className="solid" />
            <div className="questions-container">
                {completeTodos.map((todo, index) => (
                    <div key={index} className="question-box">
                        <h3>Title: {todo.title}</h3>
                        <p>Description: {todo.description}</p>
                        <p>Date: {todo.date}</p>
                        <p>Status: {todo.status ? 'Complete' : 'Incomplete'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompleteTodoPage;
