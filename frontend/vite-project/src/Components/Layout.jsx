import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Assuming user info might be stored, otherwise we fetch it

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="app-layout">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="brand">
                        <span>✨ TaskMgr</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <a
                        href="#"
                        className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}
                    >
                        Dashboard
                    </a>
                    {/* Add more nav items here if needed */}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-info">
                        {user.name && <div className="user-name">{user.name}</div>}
                        {user.email && <div className="user-email">{user.email}</div>}
                    </div>
                    <button onClick={handleLogout} className="btn btn-danger" style={{ width: '100%' }}>
                        Logout
                    </button>
                </div>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
