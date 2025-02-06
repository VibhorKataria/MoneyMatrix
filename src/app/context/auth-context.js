import auth from "../firebase/firebase";
import {useContext, createContext, useState, useEffect} from "react";
import {signInWithPopup,signOut,onAuthStateChanged,GoogleAuthProvider} from "firebase/auth";
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const googleSignin=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    }

    const logout=()=>{
        signOut(auth);
    }
    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user);
        });
        return ()=>unsubscribe();
    }, [user]);
    return (
        <AuthContext.Provider value={{user,googleSignin,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth=()=>{
    return useContext(AuthContext);
}