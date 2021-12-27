import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    } 

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account </h2>
                <span> Sign in with your e-mail and password </span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        required 
                        placeholder="e m a i l"
                        handleChange={this.handleChange} 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}     
                        placeholder="password"               
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin> 
                            Google Sign In
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;