
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/Firebase.config.jsx";

const SignUp = () => {
    const provider = new GoogleAuthProvider();
    const handleSignUp=()=>{
        signInWithPopup(auth, provider)
        .then(res=>console.log(res))
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <button onClick={handleSignUp}>Sign up</button>
        </div>
    );
};

export default SignUp;