
import React, { useState } from 'react';

const Form = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        localStorage.setItem('user', JSON.stringify({ email }));
        setIsAuthenticated(true);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        
        localStorage.setItem('user', JSON.stringify({ email }));
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Authentication Demo</h1>
            {isAuthenticated ? (
                <div>
                    <h2>Welcome, {email}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    {showLogin ? (
                        <form onSubmit={handleLogin}>
                            <h2>Login</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                    ) : 
                    (
                        <form onSubmit={handleRegister}>
                            <h2>Register</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Register</button>
                        </form>
                    )}
                    <button onClick={() => setShowLogin(!showLogin)}>
                        {showLogin ? 'Switch to Register' : 'Switch to Login'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Form;
