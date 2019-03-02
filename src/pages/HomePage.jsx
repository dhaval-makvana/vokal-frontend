import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                
                Welcome to Vokal Assignment!

                <br/>
                <Link to="/login">
                    <button>Login</button>
                </Link>

                <br/>
                <br/>

                <Link to="/register">
                    <button>Register</button>
                </Link>

            </div>
        )
    }
}

export default Homepage;