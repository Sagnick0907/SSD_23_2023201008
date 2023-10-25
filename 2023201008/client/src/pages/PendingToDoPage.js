import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './PendingToDoPage.css';

const PendingToDoPage = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [editedStatus, setEditedStatus] = useState('');
    const [editMode, setEditMode] = useState(false);

    // Create a map to store quesid
    const quesidMap = new Map();

    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            fetchData();
        }
    }, [token, navigate]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/allIncompleteQuestions', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Add the token to the headers
                },
            });
    
            if (response.ok) {
                const responseData = await response.json();
                // Update the questions state and the quesidMap
                const updatedQuestions = responseData.map(question => {
                    // Store status in the quesidMap with the key as the question's ID
                    quesidMap.set(question._id, { quesid: question.quesid, status: question.status });
                    // Return the updated question object
                    return question;
                });
    
                setQuestions(updatedQuestions);
            } else {
                console.error('Failed to fetch data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    

    const handleEditStatus = (questionId, status) => {
        setEditMode(true);
        // For the edit mode, set 'editedStatus' to the current status
        setEditedStatus(status ? "Complete" : "Incomplete");
    };

    const handleSaveStatus = async (questionId) => {
        const quesid =quesidMap.get(questionId);
        try {
            const response = await fetch('http://localhost:5000/api/users/updateQuesAnswer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({
                    quesid: quesid, // Use the quesid
                    status: editedStatus,
                }),
            });

            if (response.ok) {
                setEditMode(false);
                fetchData(); // Refresh the data
            } else {
                console.error('Edit status failed:', response.status);
            }
        } catch (error) {
            console.error('An error occurred during editing status', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="questions-container">
                {questions.map(question => (
                    <div key={question._id} className="question-box">
                        <h3>Title:</h3>
                        <p>{question.title}</p>
                        <hr className="solid" />
                        <h3>Description:</h3>
                        <p>{question.description}</p>
                        <hr className="solid" />
                        <h3>Date:</h3>
                        <p>{question.date}</p>
                        <hr className="solid" />
                        {editMode ? (
                            <div>
                                <h3>Status:</h3>
                                <select
                                    value={editedStatus}
                                    onChange={(e) => setEditedStatus(e.target.value)}
                                >
                                    <option value="Complete">Complete</option>
                                    <option value="Incomplete">Incomplete</option>
                                </select>
                            </div>
                        ) : (
                            <div>
                                <h3>Status:</h3>
                                <p>{question.status ? 'Complete' : 'Incomplete'}</p>
                            </div>
                        )}
                        {editMode ? (
                            <button onClick={() => handleSaveStatus(question._id)}>Save</button>
                        ) : (
                            <button onClick={() => handleEditStatus(question._id, question.status)}>Edit</button>
                        )}
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingToDoPage;
