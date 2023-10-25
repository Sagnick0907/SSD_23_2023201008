import { Link } from 'react-router-dom'
import '../index.css';

const Navbar = () => {
    // Function to handle logout
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        // Redirect to the login page
        window.location.href = 'http://localhost:3000/';
    };

    return (
        <div className="navbar-fixed">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fas fa-code"></i> GPT Lite
                    </Link>
                    <div className="navbar-actions">
                        <div className="navbar-box">
                            {/* Logout button */}
                            <button onClick={handleLogout} className="navbar-link">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
