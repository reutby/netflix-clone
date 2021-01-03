import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {

  const [user, setUser] = useState(localStorage.getItem("authUser"))
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // authUser = JSON.stringify(authUser);
        const { email, displayName, photoURL } = authUser;
        const userObj = {
          email: email,
          displayName: displayName,
          photoUrl: photoURL
        };
        localStorage.setItem("authUser",JSON.stringify(userObj));
        setUser(userObj);

      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
