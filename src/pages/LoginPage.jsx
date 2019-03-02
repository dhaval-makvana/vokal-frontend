import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form : {
                username: '',
                password: ''
            }
        };
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit called")
    }

    render() {

        const { form } = this.state;

        return (
            <div className="container">

                <Link to="/">Vokal Home</Link>

                <br/><br/>

                <form className="" onSubmit={this.handleSubmit}>
                    <h3>Login</h3>

                    <br/><br/>

                    <label>Email:</label>
                    <br/>

                    <input 
                        type="email"
                        name="username"
                        value={form.username}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label>Password:</label>
                    <br/>

                    <input 
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <button>Login!</button>

                </form>
                
            </div>
        )
    }
}

export default LoginPage;