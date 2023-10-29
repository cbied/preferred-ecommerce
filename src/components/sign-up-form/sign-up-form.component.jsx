import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createUserDocFromAuth,
         createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss';
const defualtFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defualtFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    const submitForm = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match")
            return
        } 
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, { displayName })
            alert("User created successfully")
            setFormFields(defualtFormFields)
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                console.error(error.message)
                alert("Email already in use")
            } else if (error.code === "auth/weak-password") {
                console.error(error.message)
                alert("Password must be at least 6 characters long")
            } else {
                console.log('createAuthUserWithEmailAndPassword error: ', error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitForm}>
                <FormInput  label="Display Name: " 
                            type="text" 
                            onChange={handleChange} 
                            name="displayName"
                            value={displayName}
                            required/>
            
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

                <FormInput  label="Confirm Password: " 
                            type="password" 
                            onChange={handleChange} 
                            name="confirmPassword"
                            value={confirmPassword}
                            required/>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm;