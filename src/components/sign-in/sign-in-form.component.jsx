import { useState } from "react";
import FormInput from "../form-input/form-input.component"
import Button from '../button/button.component'
import { signInUserWithEmailAndPassword,
         signInWithGooglePopup, 
         createUserDocFromAuth, } from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'

const defualtFormFields = {
    email: "",
    password: "",
}


const loginGoogleUserPopup = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef)
    }

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defualtFormFields);
    const { email, password } = formFields

    // update form fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            // try to authenticate user with firebasse
            const { user } = await signInUserWithEmailAndPassword(email, password)
            if (user) {
                console.log(user)
                alert("User Signed in successfully")
                // reset form fields
                setFormFields(defualtFormFields)
            }
            
        } catch (error) {
            // Email incorrect email or password
            if( error.code === "auth/invalid-login-credentials" || 
                error.code === "auth/wrong-password") {
                console.error(error.message)
                alert("Email or password is invalid")
                // user not found in db
            } else if (error.code === "auth/user-not-found") {
                console.error(error.message)
                alert("No user was found")
            } else {
                console.log('createAuthUserWithEmailAndPassword error: ', error)
            }
        }
    }

    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitForm}>
                <FormInput  label="Email: " 
                type="email" 
                onChange={handleChange} 
                name="email"
                value={email}
                required/>

                <FormInput  label="Password: " 
                type="password" 
                onChange={handleChange} 
                name="password"
                value={password}
                required/>
                <div className="buttons-container">
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button type="button" onClick={loginGoogleUserPopup} buttonType="google">
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

export default SignInForm