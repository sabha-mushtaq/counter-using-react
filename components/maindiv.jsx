import  { useState } from 'react';
import './maindiv.css';

function Container() {
    // Create a state variable to toggle between Sign In and Sign Up forms
    const [isSignUp, setIsSignUp] = useState(false);

    // Function to toggle between Sign In and Sign Up
    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <> 
            <div className="con">
                <div className="logo">
                <img src='/inst.png' alt="logo" className="logo-img" />
                </div>
                <div className="input-fields">
                    {/* Common inputs for both Sign In and Sign Up */}
                    <input placeholder="Phone number, Username, or Email" />
                    <input placeholder="Password" />
                    
                    {/* Conditionally render Full Name and Bio for Sign Up */}
                    {isSignUp && (
                        <>
                            <input placeholder="Full Name" />
                            <input placeholder="Bio" />
                        </>
                    )}
                </div>
                <div className="button">
                    <button className="w-full py-2 bg-blue-500 text-white">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                    {/* Toggle between Sign In and Sign Up */}
                    <p>
                        {isSignUp ? (
                            <span onClick={toggleSignUp}>Already have an account? Sign In</span>
                        ) : (
                            <span onClick={toggleSignUp}>Don&apos;t have an account? Sign Up</span>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Container;




