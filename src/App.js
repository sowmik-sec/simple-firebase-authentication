import "./App.css";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase/firebase.init";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("google authentication");
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
