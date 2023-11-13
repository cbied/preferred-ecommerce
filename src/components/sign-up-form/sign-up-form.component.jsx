import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import LoadingPage from '../loading-page/loading-page.componet'
import { createUserDocFromAuth,
         createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { SignUpContainer, H2 } from './sign-up-form.styles';
const defualtFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLoading: false
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defualtFormFields);
    const { displayName, email, password, confirmPassword, isLoading } = formFields;

    
    
    const submitForm = async (event) => {
        event.preventDefault();

        // if password does not match confirm password, kick back to user
        if(password !== confirmPassword) {
            alert("Passwords do not match")
            return
        } 
        setFormFields({...formFields, isLoading: true})
        try {
            // try to create new user with email and password
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            // add user display name
            await createUserDocFromAuth(user, { displayName })
            alert("User created successfully")
            // reset form fields
            setFormFields(defualtFormFields)
            setFormFields({...formFields, isLoading: false})
        } catch (error) {
            // Email already in databases
            if(error.code === "auth/email-already-in-use") {
                console.error(error.message)
                alert("Email already in use")
                setFormFields({...formFields, isLoading: false})
                // password less than 6 characters
            } else if (error.code === "auth/weak-password") {
                console.error(error.message)
                alert("Password must be at least 6 characters long")
                setFormFields({...formFields, isLoading: false})
            } else {
                console.log('createAuthUserWithEmailAndPassword error: ', error)
                setFormFields({...formFields, isLoading: false})
            }
        }
    }

    // update form fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <SignUpContainer>
        <LoadingPage isLoading={isLoading} />
            <H2>Don't have an account?</H2>
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
        </SignUpContainer>
    )
}

export default SignUpForm;