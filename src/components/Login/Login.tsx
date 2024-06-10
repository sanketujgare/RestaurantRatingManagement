// Login.tsx

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dologin } from "../../services/RestaurentAPI";
import { IFormInput, LoginProps } from "./Login.types";
import styles from "./Login.module.scss";

const Login = ({ isNewUser, setRole, isLoggedIn }: LoginProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  useEffect(() => {}, []);
  const [loginError, setLoginError] = useState("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { username, password } = data;
      const response = await Dologin(username, password);
      console.log(response);

      if (response.success) {
        isLoggedIn(true);
        setRole("User");
        console.log("working");
      }
      // Handle successful login response
    } catch (error) {
      console.error(error);
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className={styles.LoginForm}>
      <div className={styles.Login}>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            type="text"
            id="username"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder="username/email"
            {...register("username", { required: true })}
            required
          />
          {/* {errors.username && <span>This field is required</span>} */}
          {/* include validation with required or other standard HTML validation rules */}
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,20}$"
            placeholder="password"
            autoComplete="on"
            {...register("password", { required: true })}
            required
          />
          {/* errors will return when field validation fails  */}
          {/* {errors.password && <span>This field is required</span>} */}

          <input className={styles.loginbtn} type="submit" value="Login" />
        </form>
        <div className={styles.Signup}>
          <button className={styles.SignupBtn} onClick={() => isNewUser(true)}>
            SignUp
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Login;
