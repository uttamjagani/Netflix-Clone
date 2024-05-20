import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAmMXhcDVi5KnoMpfRoRMB6EytFJO62Qmg",
  authDomain: "netflix-clone-5ba77.firebaseapp.com",
  projectId: "netflix-clone-5ba77",
  storageBucket: "netflix-clone-5ba77.appspot.com",
  messagingSenderId: "656513321428",
  appId: "1:656513321428:web:acb47ec3e025185c8e6e41"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            email,
            authProvider:'local'
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout = ()=>{
    try {
        signOut(auth);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

export {auth, db , signup, login ,logout};