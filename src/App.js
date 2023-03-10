import "./App.css";
import { app } from "./firebase/firebase.init";
import {
  TwitterAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const TwitterProvider = new TwitterAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };
  const handleTwitterSignIn = () => {
    signInWithPopup(auth, TwitterProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };
  return (
    <div className="App">
      {user.displayName ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleTwitterSignIn}>Twitter Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      )}
      {user.uid && (
        <div>
          <h3>User name: {user.displayName}</h3>
          <p>Email Address: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
