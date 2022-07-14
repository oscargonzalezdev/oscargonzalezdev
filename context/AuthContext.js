import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({})

export const useAuth = () => { return useContext(AuthContext) };

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const gitHubProvider = new GithubAuthProvider()
  const googleProvider = new GoogleAuthProvider()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])
  console.log('User before:', user)
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Signed in 
      const user = userCredential.user
      console.log('User after:', user)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // Signed in 
      const user = userCredential.user
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }

  const signInWithGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, signInWithGitHub, signInWithGoogle, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}