import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth";


const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        console.log("User:", user);
        console.log("Token:", token);

    } catch (error) {
        console.error("Google Sign-In Error:", error);
    }
};

const signInWithGoogleRedirect = () => {
    signInWithRedirect(auth, provider);
};

export { auth, app, signInWithGooglePopup, signInWithGoogleRedirect };
