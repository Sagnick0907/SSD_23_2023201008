import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState({});
    const [editedData, setEditedData] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [newData, setNewData] = useState({ title: '', description: '', date: '' });
    const [quesidMap, setQuesidMap] = useState({});
    const token = localStorage.getItem('token');

    // Check if token exists, if not, redirect to /
    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            fetchData();
        }
    }, [token, navigate]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/allQuestions');
            if (response.ok) {
                const responseData = await response.json();
                const editModeObj = {};
                const editedDataObj = {};
                const quesidMapObj = {};
                responseData.forEach(item => {
                    editModeObj[item._id] = false;
                    editedDataObj[item._id] = { title: item.title, description: item.description, date: item.date };
                    quesidMapObj[item._id] = item.quesid;
                });
                setEditMode(editModeObj);
                setEditedData(editedDataObj);
                setData(responseData);
                setQuesidMap(quesidMapObj);
            } else {
                console.error('Failed to fetch data:', response.status);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    const toggleEditMode = itemId => {
        setEditMode(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };

    const handleEdit = async itemId => {
        try {
            const response = await fetch(`http://localhost:5000/api/users/updateQuesAnswer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({
                    quesid: quesidMap[itemId],
                    title: editedData[itemId].title,
                    description: editedData[itemId].description,
                    date: editedData[itemId].date,
                }),
            });

            if (response.ok) {
                console.log('Edit successful');
                toggleEditMode(itemId);
                fetchData();
            } else {
                console.error('Edit failed:', response.status);
            }
        } catch (error) {
            console.error('An error occurred during editing', error);
        }
    };

    const handleAddData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/addQuesAns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify(newData), // Send the new question and answer data
            });

            if (response.ok) {
                console.log('Add successful');
                setNewData({ title: '', description: '', date: '' });
                setShowAddForm(false);
                fetchData(); // Fetch updated data after adding

                // Display entered details in an alert
                const { title, description, date } = newData;
                alert(`Title: ${title}\nDescription: ${description}\nDate: ${date}`);
            } else {
                console.error('Add failed:', response.status);
            }
        } catch (error) {
            console.error('An error occurred during adding', error);
        }
    };
    

    return (
        <div>
            <Navbar />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <div className="admin-dashboard-container">
                <div className="admin-dashboard-box">
                    <div className="admin-dashboard-header">
                        <h2>To-do  Dashboard</h2>
                    </div>
                    <div className="admin-dashboard-content">
                        {data.map(item => (
                            <div key={item._id} className="admin-data-box">
                                <div className="question-answer-box">
                                        <h3>Title:</h3>
                                        {editMode[item._id] ? (
                                            <input
                                                type="text"
                                                placeholder="Edit Question"
                                                value={editedData[item._id].title}
                                                onChange={e =>
                                                    setEditedData({
                                                        ...editedData,
                                                        [item._id]: {
                                                            ...editedData[item._id],
                                                            title: e.target.value,
                                                        },
                                                    })
                                                }
                                            />
                                        ) : (
                                            <p>{item.title}</p>
                                        )}
                                    <div className="answer-box">
                                        <hr className="solid" />
                                        <h3>Description:</h3>
                                        {editMode[item._id] ? (
                                            <input
                                                type="text"
                                                placeholder="Edit Answer"
                                                value={editedData[item._id].description}
                                                onChange={e =>
                                                    setEditedData({
                                                        ...editedData,
                                                        [item._id]: {
                                                            ...editedData[item._id],
                                                            description: e.target.value,
                                                        },
                                                    })
                                                }
                                            />
                                        ) : (
                                            <p>{item.description}</p>
                                        )}
                                    </div>
                                    <div className="answer-box">
                                        <hr className="solid" />
                                        <h3>Date:</h3>
                                        {editMode[item._id] ? (
                                            <input
                                                type="text"
                                                placeholder="Edit Date"
                                                value={editedData[item._id].date}
                                                onChange={e =>
                                                    setEditedData({
                                                        ...editedData,
                                                        [item._id]: {
                                                            ...editedData[item._id],
                                                            date: e.target.value,
                                                        },
                                                    })
                                                }
                                            />
                                        ) : (
                                            <p>{item.date}</p>
                                        )}
                                    </div>
                                </div>
                                {editMode[item._id] ? (
                                    <button className="save-button" onClick={() => handleEdit(item._id)}>
                                        Save
                                    </button>
                                ) : (
                                    <button className="edit-button" onClick={() => toggleEditMode(item._id)}>
                                        Edit
                                    </button>
                                )}
                            </div>
                        ))}
                        {showAddForm && (
                            <div className="add-data-box">
                                <input
                                    type="text"
                                    placeholder="Add Title"
                                    value={newData.title}
                                    onChange={e =>
                                        setNewData({
                                            ...newData,
                                            title: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Add Description"
                                    value={newData.description}
                                    onChange={e =>
                                        setNewData({
                                            ...newData,
                                            description: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="date"
                                    placeholder="Add Date(YYYY-MM-DD)"
                                    value={newData.date}
                                    onChange={e =>
                                        setNewData({
                                            ...newData,
                                            date: e.target.value,
                                        })
                                    }
                                />
                                <button className="add-button" onClick={handleAddData}>
                                    Add
                                </button>
                            </div>
                        )}
                        <button className="add-data-button" onClick={() => setShowAddForm(!showAddForm)}>
                            {showAddForm ? 'Cancel' : 'Create'}
                        </button>
                    </div>
                </div>
            </div>
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />
            <hr className="solid" />

        </div>
    );
};

export default AdminDashboard;
