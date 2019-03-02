import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Register } from '../actions/index';

class RegisterPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form : {
                name: '',
                email: '',
                password: '',
                contactNumber: ''
            },
            message: ''
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
        this.props.Register(this.state.form)
            .then((data) => {

                console.log("data", data);

                this.setState({
                    ...this.state,
                    message: 'Registration Successful!'
                })
            }).catch((err) => {
                this.setState({
                    ...this.state,
                    message: 'There was problem!'
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        console.log("will receive", nextProps);
    }

    render() {

        const { form } = this.state;

        return (
            <div className="container">

                <Link to="/">Vokal Home</Link>

                <br/><br/>

                <form className="" onSubmit={this.handleSubmit}>
                    <h3>Registeration Form</h3>

                    <br/><br/>

                    <label>Name:</label>
                    <br/>

                    <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label>Email:</label>
                    <br/>

                    <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={this.handleChange}
                    />

                    <br/>
                    <br/>

                    <label>Contact Number:</label>
                    <br/>

                    <input 
                        type="number"
                        name="contactNumber"
                        value={form.contactNumber}
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

                    <button>Register!</button>

                    <br/><br/>

                    {this.state.message}

                </form>
                
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    if(state.register) {
        return {
            form: state.register
        }
    }
}

export default connect(mapStatetoProps, { Register })(RegisterPage);