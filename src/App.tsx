import React, { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NormalUser from "./components/NormalUser/NormalUser";
import Admin from "./components/Admin/Admin";
import { fetchRestaurants } from "./services/RestaurentAPI";

const App = () => {
  const [NewUser, isNewUser] = useState(false);
  const [role, setRole] = useState("");
  const [loggedIn, isLoggedIn] = useState(false);

  const [signedIn, isSignedIn] = useState(false);
  console.log(loggedIn);

  // fetchRestaurants();
  return (
    <div>
      {!loggedIn && !NewUser && (
        <Login
          isNewUser={isNewUser}
          isLoggedIn={isLoggedIn}
          setRole={setRole}
        />
      )}
      {NewUser && !signedIn && <SignUp isSignedIn={isSignedIn} />}

      {signedIn && (
        <Login
          isNewUser={isNewUser}
          isLoggedIn={isLoggedIn}
          setRole={setRole}
        />
      )}

      <div>
        {role === "User" && <NormalUser />}
        {role === "Admin" && <Admin />}
      </div>
      <NormalUser />
      {/* <Admin/> */}
    </div>
  );
};

export default App;
