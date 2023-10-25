import { Link } from 'react-router-dom';
import '../index.css';

const Navbaroutside = () => {

    return (
        <div className="navbar-fixed">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <Link to="/" className="navbar-logo">
                            <i className="fas fa-code"></i> GPT Lite
                        </Link>
                    </div>
                    <div className="navbar-actions">
                        <div className="navbar-box">
                            <Link to="/register" className="navbar-link">
                                Register
                            </Link>
                        </div>
                        <div className="navbar-box">
                            <Link to="/" className="navbar-link">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbaroutside;
