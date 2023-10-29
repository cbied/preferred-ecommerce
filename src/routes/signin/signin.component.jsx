import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup, 
         createUserDocFromAuth,
        } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    const loginGoogleUserPopup = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(response.user);

    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUserPopup}>Sign In With Goole User</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn