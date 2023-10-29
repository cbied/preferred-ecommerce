import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const loginGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response.user.uid);
        createUserDocFromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUser}>Sign In</button>
        </div>
    )
}

export default SignIn